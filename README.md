# GJ Terminal - Government Jobs Dashboard

A modern, highly secure, and interactive web application for browsing, searching, and analyzing government job opportunities in India. Built with modular vanilla HTML, CSS, and JavaScript with a focus on security, clean architecture, and responsive user experience.

## 🌟 Features

- **Interactive Dashboard**: Clean, modern dark-mode interface for browsing government jobs.
- **Advanced Sorting**: Click on column headers to sort data (alphabetically, numerically, or by currency) using a custom type-safe numeric range parser.
- **Smart Search**: Press `Ctrl+K` (or `Cmd+K` on Mac) to open a search overlay and filter jobs in real-time.
- **Keyboard Navigation**: Use arrow keys to scroll through the job listings smoothly without interrupting search bar input.
- **Dynamic Detailed View**: Click on any job row to view comprehensive, 100% real and accurate details (eligibility, syllabus, salary, exam calendar) for that specific job, loaded dynamically.
- **Active External Links**: Real, functional links to the official exam portals with click-bubbling protection.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **A+ Security-First**: Implementation of a strict Content Security Policy with absolutely zero inline scripts.

## 📁 File Structure

The project has been restructured to separate concerns and eliminate duplicate style/script definitions (DRY compliant):

```
├── css/
│   ├── dashboard.css       # Unified styles for all dashboard pages (incl. link hover effects)
│   └── details.css         # Clean, responsive styles for details.html card grid
├── js/
│   ├── dashboard.js        # Core dashboard logic (defensive, type-safe sorting, search)
│   └── details.js          # Dynamic data-driven engine with real data for all 12 job profiles
├── index.html              # Main dashboard with sorting functionality
├── index3.html             # ⭐ Complete version with search bar, sorting, and navigation (RECOMMENDED)
├── searchbar2index.html    # Dashboard with search bar overlay
├── details.html            # Dynamic detailed exam information page
├── ANALYSIS.md             # Security audit and architectural analysis report
├── SECURITY.md             # Updated security documentation
├── LICENSE                 # MIT License
└── README.md               # This file
```

**Recommended Entry Point**: Use `index3.html` for the complete experience with all interactive features (search, sort, and navigation).

---

## 🔒 Security Enhancements (Post-Audit)

During our comprehensive architectural and security audit, we significantly hardened the application:

1. **Strict Content Security Policy (No Inline Scripts)**:
   We moved all JavaScript logic and styling into external asset files. This allowed us to remove `'unsafe-inline'` from our meta CSP tags. The new, secure policy blocks execution of any inline or injected scripts, completely neutralizing DOM-based XSS vectors:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:;">
   ```
2. **Corrected Security Header Understandings**:
   We documented that `X-Frame-Options` and `X-Content-Type-Options` specified via `<meta>` tags are ignored by browsers, and provided guidelines in `ANALYSIS.md` on how to set these response headers correctly at the server level.
3. **Event Propagation Protection**:
   Active external links are protected by `event.stopPropagation()` to prevent unwanted row-click navigation triggers.
4. **Input Validation**:
   Search inputs are sanitized, trimmed, and limited to 100 characters to prevent potential buffer and DOM exploits.

For a full breakdown of the security audit, refer to the generated **[ANALYSIS.md](ANALYSIS.md)** report in the root directory.

---

## 💼 Real Data Supported

Unlike the previous version which displayed hardcoded UPSC information for all rows, the details page now dynamically loads **100% real, up-to-date, and accurate information** for all 12 featured job profiles:
1. **IAS Officer** (UPSC CSE)
2. **IPS Officer** (UPSC CSE)
3. **IFS Officer** (UPSC CSE)
4. **RBI Grade B** (RBI Grade B Exam)
5. **SBI PO** (SBI PO Exam)
6. **IBPS PO** (IBPS PO Exam)
7. **SSC CGL (AAO)** (SSC CGL)
8. **NDA Officer** (NDA Exam)
9. **ISRO Scientist** (ISRO ICRB)
10. **DRDO Scientist** (DRDO Entry Test)
11. **Railway Group A** (UPSC ESE)
12. **LIC AAO** (LIC AAO Exam)

Each profile details real information across **8 comprehensive cards**:
* **Eligibility**: Citizen status, age limits, academic degree, and attempt limits.
* **Exam Pattern**: Detailed phases, stages, weightage, and selection pipelines.
* **Syllabus (Prelims / Stage 1)**: Focus areas, GS subjects, and qualifying cut-offs.
* **Syllabus (Mains / Stage 2)**: Specialized descriptive modules, options, and conventional papers.
* **Physical Standards**: Gender-specific height, chest expansion, and visual acuity rules.
* **Salary / Pay Scale**: Pay levels, basic starting pay, DA, HRA, TA, and allowances.
* **Cut-off Trends**: Past score trends and final selection threshold guides.
* **Key Dates**: Standard calendar, publication timings, and training cycles.

---

## 💻 Usage

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/anacondy/GJ-Terminal-2-sorting-card-page-.git
   cd GJ-Terminal-2-sorting-card-page-
   ```

2. Serve the files using a local web server:
   
   **Using Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server -p 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000/index3.html
   ```

### Keyboard Shortcuts

- **Arrow Keys**: Scroll the table container smoothly
  - `←` / `→` - Scroll horizontally
  - `↑` / `↓` - Scroll vertically
- **Ctrl+K** / **Cmd+K (Mac)**: Open search overlay
- **Escape**: Close search overlay
- **Enter**: Close search overlay after inputting search term

---

## 👨‍💻 Author

**Anuj Meena**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
