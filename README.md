# GJ Terminal - Government Jobs Dashboard

A modern, secure, and interactive web application for browsing and searching government job opportunities in India. Built with vanilla HTML, CSS, and JavaScript with a focus on security and user experience.

## 🌟 Features

- **Interactive Dashboard**: Clean, modern dark-mode interface for browsing government jobs
- **Advanced Sorting**: Click on column headers to sort data (alphabetically, numerically, or by currency)
- **Smart Search**: Press `Ctrl+K` to open a search overlay and filter jobs in real-time
- **Keyboard Navigation**: Use arrow keys to navigate through the table
- **Detailed View**: Click on any job row to see comprehensive exam details
- **Responsive Design**: Optimized for desktop and mobile devices
- **Security-First**: Includes Content Security Policy, XSS protection, and input sanitization

## 🚀 Demo

The application is deployed on GitHub Pages: [View Live Demo](https://anacondy.github.io/GJ-Terminal-2-sorting-card-page-/)

## 📸 Screenshots

### Main Dashboard
![GJ Terminal Dashboard](https://github.com/user-attachments/assets/d7768116-448f-4442-b319-ea6db1fce34e)
*Interactive table with sortable columns and government job listings*

### Search Functionality (Ctrl+K)
![Search Overlay](https://github.com/user-attachments/assets/18f693db-043b-4c14-bb23-ff7ef6571c46)
*Press Ctrl+K to open the search overlay with golden glow effect*

### Real-time Filtering
![Filtered Results](https://github.com/user-attachments/assets/709a6be4-c906-4861-83a0-fcf5990c26ff)
*Live filtering as you type in the search bar*

## 📁 File Structure

```
├── index.html              # Main dashboard with sorting functionality
├── index3.html             # ⭐ Complete version with search bar, sorting, and details (RECOMMENDED)
├── searchbar2index.html    # Dashboard with search bar overlay
├── details.html            # Detailed exam information page (card-based layout)
├── LICENSE                 # MIT License
└── README.md              # This file
```

**Recommended Entry Point**: Use `index3.html` for the full experience with all features (search, sort, and navigation).

## 🔒 Security Features

This application implements multiple security best practices:

1. **Content Security Policy (CSP)**: Restricts resource loading to prevent XSS attacks
2. **Security Headers**: 
   - `X-Content-Type-Options: nosniff` - Prevents MIME-type sniffing
   - `X-Frame-Options: DENY` - Prevents clickjacking attacks
   - `X-XSS-Protection: 1; mode=block` - Enables browser XSS filtering
   - `Referrer-Policy` - Controls referrer information
3. **Input Sanitization**: Search inputs are validated and limited to 100 characters
4. **Safe DOM Manipulation**: Uses `textContent` instead of `innerHTML` to prevent XSS
5. **No External Dependencies**: No third-party JavaScript libraries that could introduce vulnerabilities

For detailed security information, see [SECURITY.md](SECURITY.md).

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
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (with http-server):**
   ```bash
   npx http-server -p 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000/index3.html
   ```
   
   Or use any of the other pages:
   - `http://localhost:8000/index.html` - Basic dashboard with sorting
   - `http://localhost:8000/searchbar2index.html` - Dashboard with search
   - `http://localhost:8000/details.html` - Details page

### Keyboard Shortcuts

- **Arrow Keys**: Navigate through the table
  - `←` / `→` - Scroll horizontally
  - `↑` / `↓` - Scroll vertically
- **Ctrl+K**: Open search overlay (on pages with search functionality)
- **Escape**: Close search overlay
- **Enter**: Submit search/close search overlay

### Interactive Features

1. **Sorting**: Click on any column header to sort the table. Click again to reverse the sort order.
2. **Searching**: Press `Ctrl+K`, type your query, and see results filtered in real-time.
3. **Details**: Click on any job row to view comprehensive exam details.

## 🌐 GitHub Pages Deployment

This repository is configured for GitHub Pages deployment:

1. Go to your repository **Settings**
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select:
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
4. Click **Save**
5. Your site will be published at: `https://[username].github.io/[repository-name]/`

The site will automatically update when you push changes to the main branch.

## 🎨 Customization

### Adding New Jobs

Edit the HTML files and add new `<tr>` rows in the `<tbody>` section:

```html
<tr>
    <td>Post Name</td>
    <td>Exam Name</td>
    <td>Conducting Body</td>
    <td>Group</td>
    <td>Gazetted Status</td>
    <td>Pay Level</td>
    <td>Salary</td>
    <td>Eligibility</td>
    <td>Age Limit</td>
    <td>PET Status</td>
</tr>
```

### Modifying Styles

All CSS is embedded in the `<style>` tags within each HTML file. Key customization points:

- **Colors**: Modify the background colors and text colors in the `body` selector
- **Fonts**: Change the Google Fonts import URL to use different fonts
- **Layout**: Adjust grid columns in `.cards-grid` for the details page

## 🧪 Testing

To verify the application works correctly:

1. **Sorting**: Click on different column headers and verify sorting works correctly
2. **Search**: Press `Ctrl+K`, enter search terms, and verify filtering
3. **Navigation**: Use arrow keys to navigate
4. **Responsive**: Test on different screen sizes
5. **Security**: Check browser console for CSP violations

## 📝 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anuj Meena**

## 🙏 Acknowledgments

- Font: [Manrope](https://fonts.google.com/specimen/Manrope) by Google Fonts
- Design inspiration: Modern dark-mode interfaces
- Security best practices: OWASP guidelines

## 📞 Support

If you encounter any issues or have questions:

1. Check existing [Issues](https://github.com/anacondy/GJ-Terminal-2-sorting-card-page-/issues)
2. Open a new issue with a detailed description
3. Include browser version and steps to reproduce

---

**Note**: This is a frontend-only application. All data is static and embedded in the HTML files. For a production application with dynamic data, consider implementing a backend API.
