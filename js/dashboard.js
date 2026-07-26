/**
 * GJ Terminal - Shared Dashboard & Search Navigation JavaScript
 * Handles sorting, search overlay, autocomplete suggestions, and cross-page controls.
 * Highly optimized for locked 60fps-144fps rendering on modern devices.
 */

document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('tableContainer');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const jobsTable = document.getElementById('jobsTable');

    // --- 1. REAL LIVE GOVERNMENT JOBS DATABASE (Union / Central & Rajasthan) ---
    // Contains only currently active/live recruitments as of July 27, 2026.
    const liveJobs = [
        { name: "Specialist & Assistant Professor", exam: "UPSC ORA Direct Recruitment", body: "UPSC" },
        { name: "Assistant / Upper Division Clerk (UDC)", exam: "ISRO Assistant & UDC Exam 2026", body: "ISRO" },
        { name: "Stenographer Grade-II & III", exam: "Rajasthan HC Stenographer Exam 2026", body: "Rajasthan HC" },
        { name: "Specialist Officer (SO)", exam: "Union Bank Specialist Officer Exam 2026", body: "Union Bank of India" },
        { name: "Aadhaar Supervisor / Operator", exam: "UIDAI CSC Supervisor Exam 2026", body: "CSC India" },
        { name: "Area Coordinator / Assistant", exam: "RGAVP Rajivika Selection 2026", body: "RGAVP" },
        { name: "Specialist Grade III", exam: "UPSC ORA Medical Recruitment 2026", body: "UPSC" },
        { name: "Public Prosecutor (SFIO)", exam: "UPSC ORA SFIO Prosecutor Exam 2026", body: "UPSC" }
    ];

    // --- 2. PERFORMANCE CACHING FOR DASHBOARD TABLES ---
    let searchIndex = [];
    if (jobsTable) {
        searchIndex = Array.from(jobsTable.tBodies[0].querySelectorAll('tr')).map(row => ({
            element: row,
            text: (row.textContent || row.innerText || '').toUpperCase()
        }));
    }

    // --- 3. KEYBOARD NAVIGATION & SHORTCUTS (ACTIVE EVERYWHERE) ---
    document.addEventListener('keydown', (event) => {
        const horizontalScrollAmount = 250;
        const verticalScrollAmount = 150;

        const isSearchVisible = searchOverlay && searchOverlay.classList.contains('visible');
        const isInputFocused = document.activeElement && 
            (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.isContentEditable);

        // Arrow key scrolling navigation (only when not typing)
        if (!isSearchVisible && !isInputFocused) {
            switch (event.key) {
                case 'ArrowLeft': 
                    if (tableContainer) {
                        event.preventDefault(); 
                        tableContainer.scrollBy({ left: -horizontalScrollAmount, behavior: 'smooth' }); 
                    }
                    break;
                case 'ArrowRight': 
                    if (tableContainer) {
                        event.preventDefault(); 
                        tableContainer.scrollBy({ left: horizontalScrollAmount, behavior: 'smooth' }); 
                    }
                    break;
                case 'ArrowUp': 
                    event.preventDefault(); 
                    window.scrollBy({ top: -verticalScrollAmount, behavior: 'smooth' }); 
                    break;
                case 'ArrowDown': 
                    event.preventDefault(); 
                    window.scrollBy({ top: verticalScrollAmount, behavior: 'smooth' }); 
                    break;
            }
        }

        // Ctrl+K / Cmd+K (Mac) to open search overlay
        if (searchOverlay && searchInput && (event.ctrlKey || event.metaKey) && (event.key === 'k' || event.key === 'K')) {
            event.preventDefault();
            searchOverlay.classList.add('visible');
            
            // Aggressive autofocus with execution buffer to bypass CSS layout cycle delay
            setTimeout(() => {
                searchInput.focus();
                searchInput.select();
            }, 50);

            // Instantly render all active jobs as quick-nav shortcuts
            renderDropdownSuggestions('');
        }

        // Escape key to close search
        if (event.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('visible')) {
            searchOverlay.classList.remove('visible');
            searchInput.blur();
        }
    });

    // --- 4. ROW CLICK HANDLERS FOR DASHBOARD ---
    if (jobsTable) {
        jobsTable.querySelectorAll('tbody tr').forEach(row => {
            row.addEventListener('click', () => {
                const firstCell = row.querySelector('td');
                if (firstCell) {
                    const postName = firstCell.textContent.trim().replace(/↗$/, '').trim();
                    window.location.href = `details.html?job=${encodeURIComponent(postName)}`;
                }
            });
        });

        // Prevent click-bubbling for active external links
        jobsTable.querySelectorAll('.external-link-icon').forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    // --- 5. TABLE HEADER SORTING ---
    if (jobsTable) {
        jobsTable.querySelectorAll('th.sortable').forEach(headerCell => {
            headerCell.addEventListener('click', () => {
                const columnIndex = parseInt(headerCell.dataset.columnIndex);
                const sortType = headerCell.dataset.sortType || 'alpha';
                const currentIsAscending = headerCell.classList.contains('sort-asc');
                sortTableByColumn(jobsTable, columnIndex, !currentIsAscending, sortType);
            });
        });
    }

    function sortTableByColumn(table, columnIndex, ascending = true, sortType) {
        const directionModifier = ascending ? 1 : -1;
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll('tr'));

        const parseValue = (text, type) => {
            if (type === 'number' || type === 'currency') {
                const cleanText = text.replace(/[₹,]/g, '').trim();
                const numMatch = cleanText.match(/[-+]?\d*\.?\d+/);
                return numMatch ? parseFloat(numMatch[0]) : 0;
            }
            return text.toLowerCase();
        };

        const sortedRows = rows.sort((a, b) => {
            const aCell = a.querySelector(`td:nth-child(${columnIndex + 1})`);
            const bCell = b.querySelector(`td:nth-child(${columnIndex + 1})`);
            const aText = aCell ? aCell.textContent.trim() : '';
            const bText = bCell ? bCell.textContent.trim() : '';

            const aVal = parseValue(aText, sortType);
            const bVal = parseValue(bText, sortType);

            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return (aVal - bVal) * directionModifier;
            } else {
                return aVal.localeCompare(bVal) * directionModifier;
            }
        });

        requestAnimationFrame(() => {
            tBody.append(...sortedRows);
            table.querySelectorAll('th.sortable').forEach(th => {
                th.classList.remove('sort-asc', 'sort-desc');
            });
            const activeHeader = table.querySelector(`th:nth-child(${columnIndex + 1})`);
            if (activeHeader) {
                activeHeader.classList.toggle('sort-asc', ascending);
                activeHeader.classList.toggle('sort-desc', !ascending);
            }
        });
    }

    // --- 6. UNIFIED SEARCH BAR AUTOCOMPLETE & OVERLAY ---
    if (searchInput && searchOverlay) {
        // Enter key closes the search bar
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                searchOverlay.classList.remove('visible');
            }
        });

        // Close search by clicking outside/background
        searchOverlay.addEventListener('click', (event) => {
            if (event.target === searchOverlay) {
                searchOverlay.classList.remove('visible');
            }
        });

        let rAFFrameId = null;

        // Key/input event triggers search suggestion and filtering
        searchInput.addEventListener('input', () => {
            let filterText = searchInput.value.trim();
            if (filterText.length > 100) {
                searchInput.value = searchInput.value.substring(0, 100);
                filterText = searchInput.value.trim();
            }

            if (rAFFrameId) {
                cancelAnimationFrame(rAFFrameId);
            }

            rAFFrameId = requestAnimationFrame(() => {
                // 1. Filter dashboard table (if table exists on page)
                if (jobsTable) {
                    const upperFilter = filterText.toUpperCase();
                    for (let i = 0; i < searchIndex.length; i++) {
                        const row = searchIndex[i];
                        if (row.text.indexOf(upperFilter) > -1) {
                            row.element.style.display = "";
                        } else {
                            row.element.style.display = "none";
                        }
                    }
                }

                // 2. Render dynamic search dropdown results
                renderDropdownSuggestions(filterText);
            });
        });
    }

    /**
     * Renders autocomplete dropdown suggestions under the input inside the modal.
     */
    function renderDropdownSuggestions(query) {
        if (!searchResults) return;

        const cleanQuery = query.trim().toUpperCase();
        
        // Find matching job records or default to all if query is empty
        const matches = cleanQuery === '' 
            ? liveJobs 
            : liveJobs.filter(job => 
                job.name.toUpperCase().includes(cleanQuery) || 
                job.exam.toUpperCase().includes(cleanQuery) || 
                job.body.toUpperCase().includes(cleanQuery)
            );

        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="search-results-item"><span class="search-results-title">No matching jobs found</span><span class="search-results-meta">Try searching for other Central or Rajasthan live jobs</span></div>';
            searchResults.style.display = "block";
            return;
        }

        // Render matches
        searchResults.innerHTML = '';
        matches.forEach(job => {
            const item = document.createElement('div');
            item.className = 'search-results-item';
            
            // Render structured search match card
            item.innerHTML = `
                <span class="search-results-title">${job.name}</span>
                <span class="search-results-meta">${job.exam} (${job.body})</span>
            `;

            // On click, navigate directly to details page
            item.addEventListener('click', () => {
                searchOverlay.classList.remove('visible');
                searchInput.value = '';
                searchResults.style.display = "none";
                
                // Navigate directly to details of the chosen job
                window.location.href = `details.html?job=${encodeURIComponent(job.name)}`;
            });

            searchResults.appendChild(item);
        });

        searchResults.style.display = "block";
    }
});
