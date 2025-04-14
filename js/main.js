// Bright Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Navigation functionality
    setupNavigation();
    
    // Initialize charts
    initCharts();
    
    // Add interactivity to elements
    addInteractivity();
});

// Setup navigation between different sections
function setupNavigation() {
    // Get all content divs
    const contentDivs = [
        'dashboard-content',
        'accommodaties-content',
        'meldingen-content',
        'plattegrond-content',
        'energie-content',
        'robots-content',
        'feedback-content',
        'integraties-content'
    ];
    
    // Get all navigation links
    const navLinks = [
        'nav-dashboard',
        'nav-accommodaties',
        'nav-meldingen',
        'nav-plattegrond',
        'nav-energie',
        'nav-robots',
        'nav-feedback',
        'nav-integraties'
    ];
    
    // Add click event to each navigation link
    navLinks.forEach((navId, index) => {
        document.getElementById(navId).addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all content divs
            contentDivs.forEach(divId => {
                document.getElementById(divId).style.display = 'none';
            });
            
            // Show the selected content div
            document.getElementById(contentDivs[index]).style.display = 'block';
            
            // Update active class on navigation
            navLinks.forEach(id => {
                document.getElementById(id).parentElement.classList.remove('active');
            });
            this.parentElement.classList.add('active');
        });
    });
    
    // Role dropdown functionality
    const roleDropdown = document.getElementById('roleDropdown');
    if (roleDropdown) {
        const roleItems = roleDropdown.nextElementSibling.querySelectorAll('.dropdown-item');
        roleItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                roleDropdown.innerHTML = '<i class="bi bi-person"></i> Rol: ' + this.textContent;
                // Here you would typically update the dashboard based on the selected role
                // For the prototype, we'll just show an alert
                alert('Dashboard aangepast voor rol: ' + this.textContent);
            });
        });
    }
}

// Initialize charts
function initCharts() {
    // Problem Units Chart
    const problemUnitsCtx = document.getElementById('problemUnitsChart');
    if (problemUnitsCtx) {
        new Chart(problemUnitsCtx, {
            type: 'bar',
            data: {
                labels: ['Unit 42', 'Unit 34', 'Unit 17', 'Unit 23', 'Unit 56'],
                datasets: [{
                    label: 'Aantal storingen',
                    data: [8, 6, 5, 4, 3],
                    backgroundColor: [
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(220, 53, 69, 0.7)',
                        'rgba(220, 53, 69, 0.6)',
                        'rgba(220, 53, 69, 0.5)',
                        'rgba(220, 53, 69, 0.4)'
                    ],
                    borderColor: [
                        'rgb(220, 53, 69)',
                        'rgb(220, 53, 69)',
                        'rgb(220, 53, 69)',
                        'rgb(220, 53, 69)',
                        'rgb(220, 53, 69)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                }
            }
        });
    }
}

// Add interactivity to various elements
function addInteractivity() {
    // Make unit cards clickable
    const unitCards = document.querySelectorAll('.card');
    unitCards.forEach(card => {
        const detailsBtn = card.querySelector('.btn-outline-primary');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const unitName = card.querySelector('.card-header h5').textContent;
                alert('Details voor ' + unitName + ' worden geladen...');
                // In a real application, this would open a detailed view
            });
        }
        
        const historyBtn = card.querySelector('.btn-outline-secondary');
        if (historyBtn && historyBtn.textContent.includes('Geschiedenis')) {
            historyBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const unitName = card.querySelector('.card-header h5').textContent;
                alert('Geschiedenis voor ' + unitName + ' wordt geladen...');
                // In a real application, this would show historical data
            });
        }
    });
    
    // Make notification items clickable
    const notificationItems = document.querySelectorAll('.list-group-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const notificationTitle = this.querySelector('h6').textContent;
            alert('Details voor melding: ' + notificationTitle);
            // In a real application, this would open the notification details
        });
    });
    
    // PDF report generation button
    const reportBtn = document.querySelector('.btn-outline-secondary[class*="bi-file-earmark-pdf"]');
    if (reportBtn) {
        reportBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('PDF rapport wordt gegenereerd...');
            // In a real application, this would generate a PDF report
        });
    }
    
    // View all notifications button
    const viewAllBtn = document.querySelector('.card-footer .btn-outline-primary');
    if (viewAllBtn && viewAllBtn.textContent.includes('Alle meldingen')) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Navigate to the notifications page
            document.getElementById('nav-meldingen').click();
        });
    }
}

// Mock data generators for future use
function generateMockAccommodations(count) {
    const accommodations = [];
    const statuses = ['Gesloten', 'Open', 'Defect'];
    const batteryLevels = [25, 45, 60, 75, 88, 92, 95];
    const temperatures = [18.5, 19.0, 20.5, 21.0, 21.5, 22.0, 23.5, 24.8];
    const wifiStatuses = ['Online', 'Offline'];
    const signalStrengths = [0, 1, 2, 3, 4];
    const occupancies = ['Gast aanwezig', 'Leeg', 'Aankomst gepland'];
    
    for (let i = 1; i <= count; i++) {
        accommodations.push({
            id: i,
            name: `Unit ${i}`,
            health: Math.round(Math.random() * 100) / 10,
            lock: {
                status: statuses[Math.floor(Math.random() * statuses.length)],
                battery: batteryLevels[Math.floor(Math.random() * batteryLevels.length)]
            },
            temperature: {
                current: temperatures[Math.floor(Math.random() * temperatures.length)],
                set: 21
            },
            wifi: {
                status: wifiStatuses[Math.floor(Math.random() * wifiStatuses.length)],
                signal: signalStrengths[Math.floor(Math.random() * signalStrengths.length)]
            },
            occupancy: occupancies[Math.floor(Math.random() * occupancies.length)]
        });
    }
    
    return accommodations;
}

function generateMockNotifications(count) {
    const notifications = [];
    const types = ['Urgent', 'Medium', 'Info'];
    const typeClasses = ['bg-danger', 'bg-warning', 'bg-info'];
    const systems = ['Slim slot', 'Wifi', 'Thermostaat', 'Robot', 'Energie'];
    const issues = [
        'defect', 
        'storing', 
        'batterij bijna leeg', 
        'onderhoud nodig', 
        'afwijkende waarde'
    ];
    const locations = ['Unit', 'Zone'];
    const timeframes = [
        '30 minuten geleden', 
        '1 uur geleden', 
        '3 uur geleden', 
        '5 uur geleden', 
        '1 dag geleden'
    ];
    
    for (let i = 1; i <= count; i++) {
        const typeIndex = Math.floor(Math.random() * types.length);
        const system = systems[Math.floor(Math.random() * systems.length)];
        const issue = issues[Math.floor(Math.random() * issues.length)];
        const locationType = locations[Math.floor(Math.random() * locations.length)];
        const locationId = Math.floor(Math.random() * 50) + 1;
        
        notifications.push({
            id: i,
            type: types[typeIndex],
            typeClass: typeClasses[typeIndex],
            title: `${system} ${issue} - ${locationType} ${locationId}`,
            description: `Probleem met ${system.toLowerCase()} in ${locationType.toLowerCase()} ${locationId}. Actie vereist.`,
            time: timeframes[Math.floor(Math.random() * timeframes.length)]
        });
    }
    
    return notifications;
}
