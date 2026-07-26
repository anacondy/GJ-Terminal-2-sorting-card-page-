/**
 * GJ Terminal - Shared Dashboard JavaScript
 * Handles sorting, searching, keyboard navigation, and row-click delegation.
 * Highly optimized for 60fps - 144fps rendering on low-end and high-refresh-rate displays.
 */

document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('tableContainer');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const jobsTable = document.getElementById('jobsTable');

    if (!jobsTable || !tableContainer) {
        console.warn('Required dashboard DOM elements not found.');
        return;
    }

    // --- 1. PERFORMANCE OPTIMIZATION: CACHE SEARCH DATA ---
    // Pre-cache row DOM elements and their text content to avoid expensive style/layout queries during typing
    const searchIndex = Array.from(jobsTable.tBodies[0].querySelectorAll('tr')).map(row => ({
        element: row,
        text: (row.textContent || row.innerText || '').toUpperCase()
    }));

    // --- 2. KEYBOARD NAVIGATION & SHORTCUTS ---
    document.addEventListener('keydown', (event) => {
        const horizontalScrollAmount = 250;
        const verticalScrollAmount = 150;

        // Determine if search or any input is active to avoid hijacking standard input behaviors
        const isSearchVisible = searchOverlay && searchOverlay.classList.contains('visible');
        const isInputFocused = document.activeElement && 
            (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.isContentEditable);

        // Arrow key navigation for the table container (only when not typing in any input)
        if (!isSearchVisible && !isInputFocused) {
            switch (event.key) {
                case 'ArrowLeft': 
                    event.preventDefault(); 
                    tableContainer.scrollBy({ left: -horizontalScrollAmount, behavior: 'smooth' }); 
                    break;
                case 'ArrowRight': 
                    event.preventDefault(); 
                    tableContainer.scrollBy({ left: horizontalScrollAmount, behavior: 'smooth' }); 
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

        // Ctrl+K / Cmd+K (Mac) to open search (if search overlay exists)
        if (searchOverlay && searchInput && (event.ctrlKey || event.metaKey) && (event.key === 'k' || event.key === 'K')) {
            event.preventDefault();
            searchOverlay.classList.add('visible');
            searchInput.focus();
        }

        // Escape key to close search
        if (event.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('visible')) {
            searchOverlay.classList.remove('visible');
            searchInput.blur();
        }
    });

    // --- 3. ROW CLICK TO DYNAMIC DETAILS PAGE ---
    jobsTable.querySelectorAll('tbody tr').forEach(row => {
        row.addEventListener('click', () => {
            const firstCell = row.querySelector('td');
            if (firstCell) {
                // Get the Post Name and pass it as a query parameter
                const postName = firstCell.textContent.trim().replace(/↗$/, '').trim();
                window.location.href = `details.html?job=${encodeURIComponent(postName)}`;
            }
        });
    });

    // --- 4. PREVENT EVENT BUBBLING FOR EXTERNAL LINKS ---
    // If there are standard external link tags or icons, clicking them shouldn't open details.html
    jobsTable.querySelectorAll('.external-link-icon').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // --- 5. TABLE HEADER SORTING ---
    jobsTable.querySelectorAll('th.sortable').forEach(headerCell => {
        headerCell.addEventListener('click', () => {
            const columnIndex = parseInt(headerCell.dataset.columnIndex);
            const sortType = headerCell.dataset.sortType || 'alpha';
            const currentIsAscending = headerCell.classList.contains('sort-asc');
            sortTableByColumn(jobsTable, columnIndex, !currentIsAscending, sortType);
        });
    });

    /**
     * Sorts the jobs table by a specific column index and type.
     */
    function sortTableByColumn(table, columnIndex, ascending = true, sortType) {
        const directionModifier = ascending ? 1 : -1;
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll('tr'));

        // Robust numeric and currency parser
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

        // Optimized DOM updates using requestAnimationFrame
        requestAnimationFrame(() => {
            tBody.append(...sortedRows);

            // Update header classes for sort indicators
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

    // --- 6. SEARCH BAR FUNCTIONALITY ---
    if (searchInput && searchOverlay) {
        // Enter key to close search bar
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                searchOverlay.classList.remove('visible');
            }
        });

        // Close search by clicking the background
        searchOverlay.addEventListener('click', (event) => {
            if (event.target === searchOverlay) {
                searchOverlay.classList.remove('visible');
            }
        });

        // Track requestAnimationFrame to throttle concurrent layouts
        let rAFFrameId = null;

        // High-performance search filtering
        searchInput.addEventListener('input', () => {
            let filterText = searchInput.value.trim().toUpperCase();
            
            if (filterText.length > 100) {
                searchInput.value = searchInput.value.substring(0, 100);
                filterText = searchInput.value.trim().toUpperCase();
            }
            
            // Cancel pending frame updates to avoid duplicate layout calculations
            if (rAFFrameId) {
                cancelAnimationFrame(rAFFrameId);
            }

            // Schedule the style updates on the next browser paint event (60fps to 144fps+)
            rAFFrameId = requestAnimationFrame(() => {
                for (let i = 0; i < searchIndex.length; i++) {
                    const row = searchIndex[i];
                    if (row.text.indexOf(filterText) > -1) {
                        row.element.style.display = "";
                    } else {
                        row.element.style.display = "none";
                    }
                }
            });
        });
    }
});
