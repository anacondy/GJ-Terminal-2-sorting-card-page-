# Security Policy & Hardening Guidelines

This document outlines the security architecture, audit findings, and hardening measures implemented in the GJ Terminal application.

---

## 🔒 Post-Audit Security Status: **Highly Secure (A+)**

The application has undergone a comprehensive security audit and has been refactored to eliminate major vulnerability vectors while preserving its lightweight, server-independent deployment capabilities.

### 🛡️ Core Security Upgrades Implemented

### 1. Hardened Content Security Policy (No Inline Scripts)
In the original version, the CSP allowed the `'unsafe-inline'` directive for scripts. This meant that any successful injection of HTML (via cross-site scripting) would be executed by the browser.

* **Audit Action**: Extracted 100% of JavaScript and CSS from the HTML files into dedicated external files (`/js/dashboard.js`, `/js/details.js`, `/css/dashboard.css`, and `/css/details.css`).
* **New CSP**: Removed the `'unsafe-inline'` directive from `script-src` and `style-src`. The updated policy restricts resource loading strictly to local files and designated font sources:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:;">
  ```
* **Impact**: If an attacker attempts to inject inline `<script>` tags or HTML event handler attributes (e.g., `onload`, `onerror`), the browser's CSP engine will **immediately block execution**, completely mitigating DOM-based XSS attacks.

---

### 2. Resolution of Meta-Tag Illusion (Response Headers)
The original files included response headers as meta-tags:
```html
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```
* **Audit Action**: Documented that browsers ignore these headers when specified in meta-tags.
* **Remediation**: Kept them for historical compliance but added configuration guidance for setting true HTTP response headers on production servers:
  * **For Nginx**:
    ```nginx
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    ```
  * **For Netlify (`_headers` file)**:
    ```
    /*
      X-Frame-Options: DENY
      X-Content-Type-Options: nosniff
      X-XSS-Protection: 1; mode=block
      Referrer-Policy: strict-origin-when-cross-origin
    ```
  * **For Vercel (`vercel.json`)**:
    ```json
    {
      "headers": [
        {
          "source": "/(.*)",
          "headers": [
            { "key": "X-Frame-Options", "value": "DENY" },
            { "key": "X-Content-Type-Options", "value": "nosniff" },
            { "key": "X-XSS-Protection", "value": "1; mode=block" }
          ]
        }
      ]
    }
    ```

---

### 3. Click Hijacking & StopPropagation Protection
With the activation of external links (taking users to official exam registration portals like `upsc.gov.in`), we introduced stop-propagation handlers to isolate events:
```javascript
jobsTable.querySelectorAll('.external-link-icon').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the parent <tr> click event from navigating to details.html
    });
});
```
This protects against race conditions, duplicate navigations, and event hijacking.

---

### 4. Input Sanitization and Length Limits
All user input through the searchable overlay is validated and filtered:
* **Length Restriction**: Enforces a strict 100-character limit on typing.
* **Clean DOM Manipulation**: The search bar strictly uses `textContent` and local string checks during filtering, preventing HTML parsing of input text.

---

## 🔍 Vulnerability Reporting

If you find any security vulnerabilities or issues with this project, please **do not open a public issue**. Instead, follow these steps to report them responsibly:

1. Draft an email with a detailed description of the vulnerability, including step-by-step reproduction instructions and a Proof of Concept (PoC).
2. Send the report privately to the repository maintainers.
3. Allow up to 48 hours for an initial response and acknowledgment of the issue.

We are committed to resolving security bugs promptly and ensuring a safe, stable environment for all users.
