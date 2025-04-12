document.addEventListener('DOMContentLoaded', function() {
    // Initialize the table
    initializeTable();
    
    // Load saved data if available
    loadSavedData();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set title based on default question set
    updateTitle(questionSets[0].title);
    
    // Initialize question panel with first question set
    updateQuestionPanel(questionSets[0]);
    
    // Build the question set selector in the question panel
    buildQuestionSetSelector();
});

// Function to set up all event listeners
function setupEventListeners() {
    // Menu toggle
    document.getElementById('menuToggle').addEventListener('click', toggleMenu);
    
    // Menu buttons
    document.getElementById('saveButton').addEventListener('click', saveTableData);
    document.getElementById('loadButton').addEventListener('click', loadSavedData);
    document.getElementById('resetButton').addEventListener('click', resetTable);
    document.getElementById('downloadPdfButton').addEventListener('click', downloadAsPdf);
    
    // Timer controls
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);
    
    // Floating Q button
    document.getElementById('floatingQ').addEventListener('click', toggleQuestionPanel);
    
    // Close question panel button
    document.getElementById('closeQuestionPanel').addEventListener('click', toggleQuestionPanel);
    
    // Close dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-toggle') && !event.target.matches('#menuArrow')) {
            const dropdown = document.getElementById('menuDropdown');
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
                document.getElementById('menuArrow').textContent = '▼';
            }
        }
    });
}

// Function to set up all event listeners
function setupEventListeners() {
    // Menu toggle
    document.getElementById('menuToggle').addEventListener('click', toggleMenu);
    
    // Menu buttons
    document.getElementById('saveButton').addEventListener('click', saveTableData);
    document.getElementById('loadButton').addEventListener('click', loadSavedData);
    document.getElementById('resetButton').addEventListener('click', resetTable);
    document.getElementById('downloadPdfButton').addEventListener('click', downloadAsPdf);
    
    // Timer controls
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);
    
    // Floating Q button
    document.getElementById('floatingQ').addEventListener('click', toggleQuestionPanel);
    
    // Close question panel button
    document.getElementById('closeQuestionPanel').addEventListener('click', toggleQuestionPanel);
    
    // Close dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-toggle') && !event.target.matches('#menuArrow')) {
            const dropdown = document.getElementById('menuDropdown');
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
                document.getElementById('menuArrow').textContent = '▼';
            }
        }
    });
}

// Function to create item number options (1-10)
function createItemNumberOptions() {
    let options = '';
    for (let i = 1; i <= 10; i++) {
        options += `<option value="${i}">${i}</option>`;
    }
    return options;
}

// Function to create priority order options (1-10)
function createPriorityOptions() {
    let options = '';
    for (let i = 1; i <= 10; i++) {
        options += `<option value="${i}">${i}</option>`;
    }
    return options;
}

// Function to create a data row
function createDataRow(rowIndex) {
    const priorityOptions = createPriorityOptions();
    const itemNumber = rowIndex - 2; // Adjust for header rows
    
    return `
        <tr>
            <td>
                ${itemNumber}
            </td>
            <td class="prioritization-subcol">
                <input type="radio" name="priority_${rowIndex}" value="तुरुन्त" />
            </td>
            <td class="prioritization-subcol">
                <input type="radio" name="priority_${rowIndex}" value="अ.जरुरी" />
            </td>
            <td class="prioritization-subcol">
                <input type="radio" name="priority_${rowIndex}" value="जरुरी" />
            </td>
            <td class="prioritization-subcol">
                <input type="radio" name="priority_${rowIndex}" value="सामान्य" />
            </td>
            <td>
                <select class="priority-order">
                    ${priorityOptions}
                </select>
            </td>
            <td>
                <div class="task-content">
                    <div class="task-main">
                        <textarea rows="3" style="width: 100%;" placeholder="गर्नुपर्ने काम" class="task-text"></textarea>
                    </div>
                    <div class="task-reason">
                        <span class="task-reason-label">कारण (पुष्ट्याँई)</span>
                        <textarea rows="3" style="width: 100%;" placeholder="कारण (पुष्ट्याँई)" class="task-reason-text"></textarea>
                    </div>
                </div>
            </td>
        </tr>
    `;
}

// Function to initialize the table with 10 rows
function initializeTable() {
    const table = document.getElementById('priorityTable');
    let tbody = '';
    
    for (let i = 3; i <= 12; i++) { // Start from 3 because we already have 2 rows
        tbody += createDataRow(i);
    }
    
    table.innerHTML += tbody;
}

// Function to update the title
function updateTitle(title) {
    document.getElementById('tableTitle').value = title;
}

// Function to build the question set selector
function buildQuestionSetSelector() {
    const questionPanelHeader = document.querySelector('.question-panel-header');
    
    // Create selector container
    const selectorContainer = document.createElement('div');
    selectorContainer.className = 'question-set-selector-container';
    selectorContainer.style.marginTop = '10px';
    
    // Create select element
    const selector = document.createElement('select');
    selector.id = 'questionSetSelector';
    selector.style.width = '100%';
    selector.style.padding = '5px';
    
    // Add options for each question set
    questionSets.forEach((set, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = set.title;
        selector.appendChild(option);
    });
    
    // Add change event listener
    selector.addEventListener('change', function() {
        const selectedIndex = this.value;
        const selectedQuestionSet = questionSets[selectedIndex];
        updateQuestionPanel(selectedQuestionSet);
        updateTitle(selectedQuestionSet.title);
    });
    
    // Add selector to container
    selectorContainer.appendChild(selector);
    
    // Add container after header
    questionPanelHeader.parentNode.insertBefore(selectorContainer, questionPanelHeader.nextSibling);
}

// Function to update the question panel content
function updateQuestionPanel(questionSet) {
    const contentElement = document.getElementById('questionContent');
    
    let html = `
        <h3>Background</h3>
        <div>${questionSet.background}</div>
        <h3>Items</h3>
    `;
    
    // Add each question as an "item"
    for (let i = 1; i <= 10; i++) {
        const questionKey = `q${i}`;
        if (questionSet[questionKey]) {
            html += `
                <div class="question-item">
                    <h4>Item ${i}</h4>
                    <p>${questionSet[questionKey]}</p>
                </div>
            `;
        }
    }
    
    contentElement.innerHTML = html;
}

// Function to toggle the question panel
function toggleQuestionPanel() {
    const panel = document.getElementById('questionPanel');
    panel.classList.toggle('open');
}

// Function to toggle dropdown menu
function toggleMenu() {
    const dropdown = document.getElementById('menuDropdown');
    const arrow = document.getElementById('menuArrow');
    dropdown.classList.toggle('show');
    
    if (dropdown.classList.contains('show')) {
        arrow.textContent = '▲';
    } else {
        arrow.textContent = '▼';
    }
}

// Function to save table data to localStorage
function saveTableData() {
    const tableTitle = document.getElementById('tableTitle').value;
    const rows = document.querySelectorAll('#priorityTable tr:not(:first-child):not(.subheader-row)');
    const tableData = {
        title: tableTitle,
        items: []
    };
    
    rows.forEach((row, index) => {
        const itemNumber = index + 1; // Fixed item number
        const priorityRadios = row.querySelectorAll('input[type="radio"]');
        let selectedPriority = '';
        
        priorityRadios.forEach(radio => {
            if (radio.checked) {
                selectedPriority = radio.value;
            }
        });
        
        const priorityOrder = row.querySelector('.priority-order')?.value || '';
        const taskText = row.querySelector('.task-text')?.value || '';
        const taskReasonText = row.querySelector('.task-reason-text')?.value || '';
        
        tableData.items.push({
            itemNumber,
            selectedPriority,
            priorityOrder,
            taskText,
            taskReasonText
        });
    });
    
    // Also save the header row textarea content
    const headerTextarea = document.querySelector('.subheader-row td:last-child textarea');
    if (headerTextarea) {
        tableData.headerText = headerTextarea.value;
    }
    
    localStorage.setItem('prioritizationTableData', JSON.stringify(tableData));
    alert('Data saved successfully!');
}

// Function to load saved data from localStorage
function loadSavedData() {
    const savedData = localStorage.getItem('prioritizationTableData');
    
    if (savedData) {
        const tableData = JSON.parse(savedData);
        
        // Set title
        document.getElementById('tableTitle').value = tableData.title || '';
        
        // Set header row textarea content
        const headerTextarea = document.querySelector('.subheader-row td:last-child textarea');
        if (headerTextarea && tableData.headerText) {
            headerTextarea.value = tableData.headerText;
        }
        
        // Set items data
        const rows = document.querySelectorAll('#priorityTable tr:not(:first-child):not(.subheader-row)');
        
        tableData.items.forEach((item, index) => {
            if (index < rows.length) {
                const row = rows[index];
                
                // Set priority radio
                const priorityRadios = row.querySelectorAll('input[type="radio"]');
                priorityRadios.forEach(radio => {
                    if (radio.value === item.selectedPriority) {
                        radio.checked = true;
                    }
                });
                
                // Set priority order
                const priorityOrderSelect = row.querySelector('.priority-order');
                if (priorityOrderSelect && item.priorityOrder) {
                    priorityOrderSelect.value = item.priorityOrder;
                }
                
                // Set task text
                const taskTextArea = row.querySelector('.task-text');
                if (taskTextArea) {
                    taskTextArea.value = item.taskText || '';
                }
                
                // Set task reason text
                const taskReasonTextArea = row.querySelector('.task-reason-text');
                if (taskReasonTextArea) {
                    taskReasonTextArea.value = item.taskReasonText || '';
                }
            }
        });
        
        alert('Data loaded successfully!');
    } else {
        alert('No saved data found.');
    }
}

// Function to reset the table completely
function resetTable() {
    if (confirm('Are you sure you want to reset the table? All data will be lost.')) {
        // Reset the title to the current question set title
        updateTitle(questionSets[0].title);
        
        const rows = document.querySelectorAll('#priorityTable tr:not(:first-child):not(.subheader-row)');
        
        rows.forEach(row => {
            // Reset priority radios
            const priorityRadios = row.querySelectorAll('input[type="radio"]');
            priorityRadios.forEach(radio => {
                radio.checked = false;
            });
            
            // Reset priority order
            const priorityOrderSelect = row.querySelector('.priority-order');
            if (priorityOrderSelect) {
                priorityOrderSelect.selectedIndex = 0;
            }
            
            // Reset task text
            const taskTextArea = row.querySelector('.task-text');
            if (taskTextArea) {
                taskTextArea.value = '';
            }
            
            // Reset task reason text
            const taskReasonTextArea = row.querySelector('.task-reason-text');
            if (taskReasonTextArea) {
                taskReasonTextArea.value = '';
            }
        });
        
        // Also clear second row's header text area
        const headerTextArea = document.querySelector('.subheader-row td:last-child textarea');
        if (headerTextArea) {
            headerTextArea.value = '';
        }
        
        // Reset timer
        resetTimer();
        
        localStorage.removeItem('prioritizationTableData');
        alert('Table has been reset.');
    }
}

// Timer functionality
let timerMinutes = 50;
let timerSeconds = 0;
let timerInterval;
let isTimerRunning = false;

function updateTimerDisplay() {
    const minutes = timerMinutes < 10 ? '0' + timerMinutes : timerMinutes;
    const seconds = timerSeconds < 10 ? '0' + timerSeconds : timerSeconds;
    document.getElementById('timerDisplay').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
            } else if (timerMinutes > 0) {
                timerMinutes--;
                timerSeconds = 59;
            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                alert('Time is up!');
            }
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerMinutes = 50;
    timerSeconds = 0;
    updateTimerDisplay();
}

// Function to download as text file (.txt) with Nepali content
function downloadAsPdf() {
    // Get the title for the filename
    const tableTitle = document.getElementById('tableTitle').value || 'प्राथमिकीकरण तालिका';
    const fileName = tableTitle.replace(/\s+/g, '_') + '.txt';
    
    // Create text content
    let textContent = '';
    
    // Add title
    textContent += tableTitle + '\n';
    textContent += '='.repeat(tableTitle.length) + '\n\n';
    
    // Get the date
    const today = new Date();
    const dateStr = today.toLocaleDateString('ne-NP', { year: 'numeric', month: 'long', day: 'numeric' });
    textContent += `मिति: ${dateStr}\n\n`;
    
    // Get all data rows (skip header row and subheader row)
    const allRows = document.querySelectorAll('#priorityTable tr:not(:first-child):not(.subheader-row)');
    const headerText = document.querySelector('.subheader-row td:last-child textarea').value;
    
    // Add header text if available
    if (headerText && headerText.trim() !== '') {
        textContent += 'मुख्य नोट:\n';
        textContent += headerText + '\n\n';
    }
    
    // Process all rows sequentially
    for (let i = 0; i < allRows.length; i++) {
        const row = allRows[i];
        const itemNumber = i + 1; // Fixed item number
        
        // Find selected priority
        let selectedPriority = '';
        const priorityRadios = row.querySelectorAll('input[type="radio"]');
        priorityRadios.forEach(radio => {
            if (radio.checked) {
                selectedPriority = radio.value;
            }
        });
        
        const priorityOrder = row.querySelector('.priority-order')?.value || '';
        const taskText = row.querySelector('.task-text')?.value || '';
        const taskReasonText = row.querySelector('.task-reason-text')?.value || '';
        
        // Add item number and priority
        textContent += `आईटम ${itemNumber}: प्राथमिकता क्रम ${priorityOrder}\n`;
        
        // Add priority level
        const priorityText = selectedPriority ? `प्राथमिकीकरण: ${selectedPriority}` : 'प्राथमिकीकरण: तोकिएको छैन';
        textContent += priorityText + '\n';
        
        // Add task content
        if (taskText && taskText.trim() !== '') {
            textContent += 'गर्नुपर्ने काम:\n';
            textContent += '    ' + taskText.replace(/\n/g, '\n    ') + '\n';
        }
        
        // Add reason content
        if (taskReasonText && taskReasonText.trim() !== '') {
            textContent += 'कारण (पुष्ट्याँई):\n';
            textContent += '    ' + taskReasonText.replace(/\n/g, '\n    ') + '\n';
        }
        
        // Add separator between items
        if (i < allRows.length - 1) {
            textContent += '\n' + '-'.repeat(50) + '\n\n';
        }
    }
    
    // Add footer
    textContent += '\n\n';
    textContent += '='.repeat(50) + '\n';
    textContent += 'Developed by Shiva Prasad Acharya, Supreme Court\n';
    
    // Create a Blob with the text content
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    
    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}