// Bright Dashboard Modules Implementation

// Load mock data
document.addEventListener('DOMContentLoaded', function() {
    // Add script reference to mock-data.js if not already included
    if (!document.querySelector('script[src="data/mock-data.js"]')) {
        const mockDataScript = document.createElement('script');
        mockDataScript.src = 'data/mock-data.js';
        document.head.appendChild(mockDataScript);
        
        // Wait for mock data to load before initializing modules
        mockDataScript.onload = function() {
            initializeAllModules();
        };
    } else {
        initializeAllModules();
    }
});

function initializeAllModules() {
    // Initialize all modules
    initMeldingenModule();
    initPlattegrondModule();
    initEnergieModule();
    initRobotsModule();
    initFeedbackModule();
    initIntegratiesModule();
}

// Module 2: Slimme meldingen en monitoring
function initMeldingenModule() {
    const meldingenContent = document.getElementById('meldingen-content');
    if (!meldingenContent) return;
    
    // Create HTML content for the meldingen module
    let html = `
        <div class="row mb-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Filters</h5>
                        <button class="btn btn-sm btn-outline-secondary">Reset filters</button>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Urgentie</label>
                                <select class="form-select">
                                    <option value="">Alle</option>
                                    <option value="urgent">Urgent</option>
                                    <option value="medium">Medium</option>
                                    <option value="info">Info</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Datum</label>
                                <select class="form-select">
                                    <option value="">Alle</option>
                                    <option value="today">Vandaag</option>
                                    <option value="yesterday">Gisteren</option>
                                    <option value="week">Afgelopen week</option>
                                    <option value="older">Ouder dan 7 dagen</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Locatie</label>
                                <select class="form-select">
                                    <option value="">Alle</option>
                                    <option value="zone_a">Zone A</option>
                                    <option value="zone_b">Zone B</option>
                                    <option value="zone_c">Zone C</option>
                                    <option value="zone_d">Zone D</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Systeemtype</label>
                                <select class="form-select">
                                    <option value="">Alle</option>
                                    <option value="lock">Slim slot</option>
                                    <option value="wifi">Wifi</option>
                                    <option value="thermostat">Thermostaat</option>
                                    <option value="robot">Robot</option>
                                    <option value="energy">Energie</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Zoek op trefwoord...">
                                    <button class="btn btn-primary" type="button">Zoeken</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Meldingen</h5>
                        <span class="badge bg-secondary">24 meldingen</span>
                    </div>
                    <div class="card-body">
                        <div class="list-group">`;
    
    // Add notifications from mock data
    if (typeof notificationsData !== 'undefined') {
        notificationsData.forEach(notification => {
            html += `
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1"><span class="badge ${notification.typeClass} me-2">${notification.type}</span> ${notification.title}</h6>
                        <small>${notification.time}</small>
                    </div>
                    <p class="mb-1">${notification.description}</p>
                </a>`;
        });
        
        // Add more mock notifications
        html += `
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1"><span class="badge bg-warning me-2">Medium</span> Thermostaat afwijking - Unit 23</h6>
                    <small>8 uur geleden</small>
                </div>
                <p class="mb-1">Temperatuur is 3.8°C hoger dan ingesteld, mogelijk defecte thermostaat.</p>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1"><span class="badge bg-info me-2">Info</span> Batterij slim slot - Unit 56</h6>
                    <small>1 dag geleden</small>
                </div>
                <p class="mb-1">Batterijniveau onder 30%, vervang binnen 2 weken.</p>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1"><span class="badge bg-info me-2">Info</span> Predictief onderhoud - Wifi Zone B</h6>
                    <small>2 dagen geleden</small>
                </div>
                <p class="mb-1">Router in Zone B toont tekenen van verminderde prestaties, plan vervanging.</p>
                <div class="alert alert-info mt-2 mb-0">
                    <i class="bi bi-lightbulb"></i> Predictieve melding: Gebaseerd op historische data en prestatietrends.
                </div>
            </a>`;
    }
    
    html += `
                        </div>
                    </div>
                    <div class="card-footer">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Vorige</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Volgende</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    meldingenContent.innerHTML = html;
    
    // Add event listeners
    const filterSelects = meldingenContent.querySelectorAll('.form-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            alert('Filter toegepast: ' + this.value);
        });
    });
    
    const searchButton = meldingenContent.querySelector('.btn-primary');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = meldingenContent.querySelector('.form-control');
            alert('Zoeken naar: ' + searchInput.value);
        });
    }
    
    const resetButton = meldingenContent.querySelector('.btn-outline-secondary');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            filterSelects.forEach(select => {
                select.selectedIndex = 0;
            });
            alert('Filters gereset');
        });
    }
    
    const notificationItems = meldingenContent.querySelectorAll('.list-group-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const notificationTitle = this.querySelector('h6').textContent;
            alert('Details voor melding: ' + notificationTitle);
        });
    });
}

// Module 3: Interactieve parkplattegrond (Digital Twin)
function initPlattegrondModule() {
    const plattegrondContent = document.getElementById('plattegrond-content');
    if (!plattegrondContent) return;
    
    // Create HTML content for the plattegrond module
    let html = `
        <div class="row mb-4">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Parkplattegrond</h5>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-sm btn-outline-secondary active">Standaard</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Storingen</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Wifi-dekking</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Energieverbruik</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="park-map-container" style="position: relative; height: 500px; background-color: #f0f0f0; border-radius: 5px;">
                            <!-- Placeholder for the park map -->
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                                <i class="bi bi-map" style="font-size: 48px; color: #aaa;"></i>
                                <p>Interactieve parkplattegrond</p>
                                <p><small>Klik op een unit voor details</small></p>
                            </div>
                            
                            <!-- Sample units on the map -->
                            <div class="map-unit" style="position: absolute; top: 30%; left: 20%; width: 40px; height: 40px; background-color: #28a745; border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer;" data-unit="12">12</div>
                            
                            <div class="map-unit" style="position: absolute; top: 40%; left: 35%; width: 40px; height: 40px; background-color: #ffc107; border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer;" data-unit="23">23</div>
                            
                            <div class="map-unit" style="position: absolute; top: 60%; left: 50%; width: 40px; height: 40px; background-color: #dc3545; border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer;" data-unit="34">34</div>
                            
                            <div class="map-unit" style="position: absolute; top: 25%; left: 65%; width: 40px; height: 40px; background-color: #dc3545; border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer;" data-unit="42">42</div>
                            
                            <!-- Zone labels -->
                            <div style="position: absolute; top: 15%; left: 25%; color: #666; font-weight: bold;">Zone A</div>
                            <div style="position: absolute; top: 35%; left: 45%; color: #666; font-weight: bold;">Zone B</div>
                            <div style="position: absolute; top: 65%; left: 30%; color: #666; font-weight: bold;">Zone C</div>
                            <div style="position: absolute; top: 20%; left: 70%; color: #666; font-weight: bold;">Zone D</div>
                            
                            <!-- Robot location -->
                            <div style="position: absolute; top: 50%; left: 40%; width: 30px; height: 30px; background-color: #17a2b8; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer;" title="CleanBot 1">
                                <i class="bi bi-robot"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="showRoutesSwitch">
                                    <label class="form-check-label" for="showRoutesSwitch">Toon schoonmaakroutes</label>
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <button class="btn btn-sm btn-outline-secondary">
                                    <i class="bi bi-zoom-in"></i> Inzoomen
                                </button>
                                <button class="btn btn-sm btn-outline-secondary">
                                    <i class="bi bi-zoom-out"></i> Uitzoomen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card mb-4">
                    <div class="card-header">
                        <h5>Legenda</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <div style="width: 20px; height: 20px; background-color: #28a745; border-radius: 3px;"></div>
                            <span class="ms-2">Geen storingen</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <div style="width: 20px; height: 20px; background-color: #ffc107; border-radius: 3px;"></div>
                            <span class="ms-2">Kleine storing</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <div style="width: 20px; height: 20px; background-color: #dc3545; border-radius: 3px;"></div>
                            <span class="ms-2">Kritieke storing</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <div style="width: 20px; height: 20px; background-color: #17a2b8; border-radius: 50%;"></div>
                            <span class="ms-2">Robot</span>
                        </div>
                        <hr>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="showOccupiedCheck" checked>
                            <label class="form-check-label" for="showOccupiedCheck">
                                Toon bezette units
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="showEmptyCheck" checked>
                            <label class="form-check-label" for="showEmptyCheck">
                                Toon lege units
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="showArrivalsCheck" checked>
                            <label class="form-check-label" for="showArrivalsCheck">
                                Toon geplande aankomsten
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h5>Unit Details</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Klik op een unit op de plattegrond om details te bekijken.</p>
                        <div id="unitDetails" style="display: none;">
                            <h6 id="unitTitle">Unit 12</h6>
                            <div class="unit-status-item">
                                <i class="bi bi-door-closed text-success"></i> Slim slot: <span id="unitLockStatus">Gesloten</span>
                            </div>
                            <div class="unit-status-item">
                                <i class="bi bi-thermometer-half text-success"></i> Temperatuur: <span id="unitTemp">21.5°C</span>
                            </div>
                            <div class="unit-status-item">
                                <i class="bi bi-wifi text-success"></i> Wifi: <span id="unitWifi">Online</span>
                            </div>
                            <div class="unit-status-item">
                                <i class="bi bi-person-check text-success"></i> Bezetting: <span id="unitOccupancy">Gast aanwezig</span>
                            </div>
                            <button class="btn btn-sm btn-primary mt-3">Bekijk volledige details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    plattegrondContent.innerHTML = html;
    
    // Add event listeners
    const mapUnits = plattegrondContent.querySelectorAll('.map-unit');
    const unitDetails = plattegrondContent.querySelector('#unitDetails');
    const unitTitle = plattegrondContent.querySelector('#unitTitle');
    const unitLockStatus = plattegrondContent.querySelector('#unitLockStatus');
    const unitTemp = plattegrondContent.querySelector('#unitTemp');
    const unitWifi = plattegrondContent.querySelector('#unitWifi');
    const unitOccupancy = plattegrondContent.querySelector('#unitOccupancy');
    
    mapUnits.forEach(unit => {
        unit.addEventListener('click', function() {
            const unitId = this.getAttribute('data-unit');
            
            // Find unit data in mock data
            if (typeof accommodationsData !== 'undefined') {
                const unitData = accommodationsData.find(acc => acc.id == unitId);
                
                if (unitData) {
                    unitTitle.textContent = unitData.name;
                    unitLockStatus.textContent = unitData.lock.status;
                    unitLockStatus.className = unitData.lock.statusClass;
                    unitTemp.textContent = unitData.temperature.current + '°C';
                    unitWifi.textContent = unitData.wifi.status;
                    unitWifi.className = unitData.wifi.statusClass;
                    unitOccupancy.textContent = unitData.occupancy.status;
                    unitOccupancy.className = unitData.occupancy.statusClass;
                    
                    unitDetails.style.display = 'block';
                }
            } else {
                // Fallback if mock data is not available
                unitTitle.textContent = 'Unit ' + unitId;
                unitDetails.style.display = 'block';
            }
        });
    });
    
    // Map view toggle buttons
    const viewButtons = plattegrondContent.querySelectorAll('.btn-group .btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            alert('Kaartweergave gewijzigd naar: ' + this.textContent);
        });
    });
    
    // Zoom buttons
    const zoomInButton = plattegrondContent.querySelector('.bi-zoom-in').parentElement;
    const zoomOutButton = plattegrondContent.querySelector('.bi-zoom-out').parentElement;
    
    zoomInButton.addEventListener('click', function() {
        alert('Inzoomen op kaart');
    });
    
    zoomOutButton.addEventListener('click', function() {
        alert('Uitzoomen op kaart');
    });
    
    // Show routes switch
    const showRoutesSwitch = plattegrondContent.querySelector('#showRoutesSwitch');
    showRoutesSwitch.addEventListener('change', function() {
        alert('Schoonmaakroutes ' + (this.checked ? 'weergeven' : 'verbergen'));
    });
    
    // Checkboxes in legend
    const checkboxes = plattegrondContent.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            alert(this.nextElementSibling.textContent.trim() + ' ' + (this.checked ? 'weergeven' : 'verbergen'));
        });
    });
}

// Module 4: Energie- en verbruiksmonitoring
function initEnergieModule() {
    const energieContent = document.getElementById('energie-content');
    if (!energieContent) return;
    
    // Create HTML content for the energie module
    let html = `
        <div class="row mb-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Energieverbruik Overzicht</h5>
                        <div>
                            <select class="form-select form-select-sm d-inline-block" style="width: auto;">
                                <option>Afgelopen week</option>
                                <option>Afgelopen maand</option>
                                <option selected>Afgelopen 3 maanden</option>
                                <option>Afgelopen jaar</option>
                            </select>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-3">
                                    <div class="card-body text-center">
                                        <h6 class="card-title">Elektriciteit</h6>
                                        <h2 class="text-primary">2450 kWh</h2>
                                        <p class="text-success"><i class="bi bi-arrow-down"></i> -12% t.o.v. vorige periode</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-3">
                                    <div class="card-body text-center">
                                        <h6 class="card-title">Gas</h6>
                                        <h2 class="text-primary">320 m³</h2>
                                        <p class="text-success"><i class="bi bi-arrow-down"></i> -16% t.o.v. vorige periode</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-3">
                                    <div class="card-body text-center">
                                        <h6 class="card-title">Water</h6>
                                        <h2 class="text-primary">45000 L</h2>
                                        <p class="text-success"><i class="bi bi-arrow-down"></i> -6% t.o.v. vorige periode</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="chart-container" style="position: relative; height: 300px;">
                            <canvas id="energyChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Verbruik per Unit</h5>
                        <div>
                            <select class="form-select form-select-sm d-inline-block" style="width: auto;">
                                <option>Elektriciteit</option>
                                <option>Gas</option>
                                <option selected>Water</option>
                                <option>Alle</option>
                            </select>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Unit</th>
                                        <th>Verbruik</th>
                                        <th>Gemiddelde</th>
                                        <th>Afwijking</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Unit 12</td>
                                        <td>1250 L</td>
                                        <td>1200 L</td>
                                        <td>+4%</td>
                                        <td><span class="badge bg-success">Normaal</span></td>
                                    </tr>
                                    <tr>
                                        <td>Unit 23</td>
                                        <td>1380 L</td>
                                        <td>1200 L</td>
                                        <td>+15%</td>
                                        <td><span class="badge bg-warning">Verhoogd</span></td>
                                    </tr>
                                    <tr class="table-danger">
                                        <td>Unit 34</td>
                                        <td>3000 L</td>
                                        <td>1200 L</td>
                                        <td>+150%</td>
                                        <td><span class="badge bg-danger">Afwijkend</span></td>
                                    </tr>
                                    <tr>
                                        <td>Unit 42</td>
                                        <td>1150 L</td>
                                        <td>1200 L</td>
                                        <td>-4%</td>
                                        <td><span class="badge bg-success">Normaal</span></td>
                                    </tr>
                                    <tr>
                                        <td>Unit 56</td>
                                        <td>980 L</td>
                                        <td>1200 L</td>
                                        <td>-18%</td>
                                        <td><span class="badge bg-info">Efficiënt</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Afwijkende Verbruiken</h5>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger">
                            <strong><i class="bi bi-exclamation-triangle"></i> Mogelijke lekkage in unit 34</strong>
                            <p class="mb-0">Waterverbruik 150% hoger dan gemiddeld</p>
                        </div>
                        <div class="alert alert-warning">
                            <strong><i class="bi bi-lightning"></i> Ongewoon hoog stroomverbruik in unit 17</strong>
                            <p class="mb-0">Mogelijk apparaat defect</p>
                        </div>
                        <div class="alert alert-info">
                            <strong><i class="bi bi-info-circle"></i> Suggestie</strong>
                            <p class="mb-0">Controleer thermostaat in unit 23, mogelijk verkeerd ingesteld</p>
                        </div>
                        
                        <button class="btn btn-outline-primary btn-sm w-100 mt-3">
                            <i class="bi bi-clipboard-data"></i> Genereer energierapport
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    energieContent.innerHTML = html;
    
    // Initialize energy chart if Chart.js is available
    if (typeof Chart !== 'undefined') {
        const ctx = document.getElementById('energyChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Elektriciteit (kWh)',
                            data: [2800, 2750, 2900, 2700, 2600, 2500, 2650, 2700, 2550, 2450, 2400, 2350],
                            borderColor: 'rgba(13, 110, 253, 1)',
                            backgroundColor: 'rgba(13, 110, 253, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Gas (m³ x 10)',
                            data: [450, 420, 400, 350, 300, 250, 200, 220, 280, 320, 380, 410],
                            borderColor: 'rgba(220, 53, 69, 1)',
                            backgroundColor: 'rgba(220, 53, 69, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Water (L x 100)',
                            data: [380, 400, 420, 450, 470, 500, 520, 510, 490, 450, 420, 400],
                            borderColor: 'rgba(32, 201, 151, 1)',
                            backgroundColor: 'rgba(32, 201, 151, 0.1)',
                            tension: 0.4,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
    
    // Add event listeners
    const periodSelect = energieContent.querySelector('.card-header .form-select');
    if (periodSelect) {
        periodSelect.addEventListener('change', function() {
            alert('Periode gewijzigd naar: ' + this.value);
        });
    }
    
    const typeSelect = energieContent.querySelectorAll('.card-header .form-select')[1];
    if (typeSelect) {
        typeSelect.addEventListener('change', function() {
            alert('Verbruikstype gewijzigd naar: ' + this.value);
        });
    }
    
    const reportButton = energieContent.querySelector('.btn-outline-primary');
    if (reportButton) {
        reportButton.addEventListener('click', function() {
            alert('Energierapport wordt gegenereerd...');
        });
    }
    
    const tableRows = energieContent.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const unit = this.cells[0].textContent;
            alert('Details voor ' + unit + ' worden geladen...');
        });
    });
}

// Module 5: Robots & autonome systemen
function initRobotsModule() {
    const robotsContent = document.getElementById('robots-content');
    if (!robotsContent) return;
    
    // Create HTML content for the robots module
    let html = `
        <div class="row mb-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Robot Overzicht</h5>
                        <button class="btn btn-sm btn-outline-primary">
                            <i class="bi bi-plus"></i> Nieuwe taak inplannen
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="row">`;
    
    // Add robot cards from mock data
    if (typeof robotsData !== 'undefined') {
        robotsData.forEach(robot => {
            html += `
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6>${robot.name}</h6>
                            <span class="badge ${robot.statusClass}">${robot.status}</span>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Batterij</label>
                                <div class="progress">
                                    <div class="progress-bar ${robot.battery < 20 ? 'bg-danger' : robot.battery < 50 ? 'bg-warning' : 'bg-success'}" role="progressbar" style="width: ${robot.battery}%;" aria-valuenow="${robot.battery}" aria-valuemin="0" aria-valuemax="100">${robot.battery}%</div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Locatie</label>
                                <p class="mb-0"><i class="bi bi-geo-alt"></i> ${robot.location}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Readiness</label>
                                <div class="progress">
                                    <div class="progress-bar ${robot.readiness < 50 ? 'bg-danger' : robot.readiness < 80 ? 'bg-warning' : 'bg-success'}" role="progressbar" style="width: ${robot.readiness}%;" aria-valuenow="${robot.readiness}" aria-valuemin="0" aria-valuemax="100">${robot.readiness}%</div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Onderhoud</label>
                                <ul class="list-group list-group-flush">`;
            
            robot.maintenance.forEach(item => {
                html += `
                    <li class="list-group-item d-flex justify-content-between align-items-center p-2">
                        ${item.part}
                        <span class="${item.statusClass}">${item.status}</span>
                    </li>`;
            });
            
            html += `
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-sm btn-outline-primary w-100">Details</button>
                        </div>
                    </div>
                </div>`;
        });
    } else {
        // Fallback if mock data is not available
        html += `
            <div class="col-md-12">
                <p class="text-muted">Geen robot data beschikbaar.</p>
            </div>`;
    }
    
    html += `
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h5>Robot Activiteit</h5>
                    </div>
                    <div class="card-body">
                        <div class="chart-container" style="position: relative; height: 300px;">
                            <canvas id="robotActivityChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Onderhoudsmeldingen</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1">CleanBot 3 - Borstels vervangen</h6>
                                    <small class="text-danger">Urgent</small>
                                </div>
                                <p class="mb-1">Borstels zijn versleten en moeten vervangen worden.</p>
                                <small>Gepland: 15-04-2025</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1">CleanBot 2 - Filters vervangen</h6>
                                    <small class="text-warning">Medium</small>
                                </div>
                                <p class="mb-1">Filters zijn bijna verzadigd en moeten binnenkort vervangen worden.</p>
                                <small>Gepland: 20-04-2025</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1">GrassBot 1 - Routine onderhoud</h6>
                                    <small class="text-info">Info</small>
                                </div>
                                <p class="mb-1">Gepland routine onderhoud voor GrassBot 1.</p>
                                <small>Gepland: 30-04-2025</small>
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-sm btn-outline-primary w-100">Alle meldingen bekijken</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    robotsContent.innerHTML = html;
    
    // Initialize robot activity chart if Chart.js is available
    if (typeof Chart !== 'undefined') {
        const ctx = document.getElementById('robotActivityChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['CleanBot 1', 'CleanBot 2', 'CleanBot 3', 'GrassBot 1'],
                    datasets: [
                        {
                            label: 'Oppervlakte gereinigd (m²)',
                            data: [450, 380, 0, 850],
                            backgroundColor: 'rgba(13, 110, 253, 0.7)',
                            borderColor: 'rgba(13, 110, 253, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Werktijd (uren x 100)',
                            data: [350, 280, 0, 220],
                            backgroundColor: 'rgba(32, 201, 151, 0.7)',
                            borderColor: 'rgba(32, 201, 151, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
    
    // Add event listeners
    const detailButtons = robotsContent.querySelectorAll('.card-footer .btn-outline-primary');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const robotName = this.closest('.card').querySelector('.card-header h6').textContent;
            alert('Details voor ' + robotName + ' worden geladen...');
        });
    });
    
    const planTaskButton = robotsContent.querySelector('.card-header .btn-outline-primary');
    if (planTaskButton) {
        planTaskButton.addEventListener('click', function() {
            alert('Nieuwe taak inplannen...');
        });
    }
    
    const maintenanceItems = robotsContent.querySelectorAll('.list-group-item');
    maintenanceItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const maintenanceTitle = this.querySelector('h6').textContent;
            alert('Details voor onderhoud: ' + maintenanceTitle);
        });
    });
    
    const viewAllButton = robotsContent.querySelector('.card-footer .btn-outline-primary');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function() {
            alert('Alle onderhoudsmeldingen bekijken...');
        });
    }
}

// Module 6: Gastfeedback gekoppeld aan techniek
function initFeedbackModule() {
    const feedbackContent = document.getElementById('feedback-content');
    if (!feedbackContent) return;
    
    // Create HTML content for the feedback module
    let html = `
        <div class="row mb-4">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h5>Feedback Overzicht</h5>
                    </div>
                    <div class="card-body">
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h6 class="card-title">Gemiddelde Beoordeling</h6>
                                        <h2 class="text-primary">3.7 / 5</h2>
                                        <div>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-half text-warning"></i>
                                            <i class="bi bi-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h6 class="card-title">Techniek Gerelateerd</h6>
                                        <h2 class="text-danger">24%</h2>
                                        <p class="text-muted"><small>van alle feedback</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h6 class="card-title">Trend</h6>
                                        <h2 class="text-success"><i class="bi bi-arrow-up"></i> +0.3</h2>
                                        <p class="text-muted"><small>t.o.v. vorige maand</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="chart-container" style="position: relative; height: 300px;">
                            <canvas id="feedbackChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Top Klachtcategorieën</h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="d-flex justify-content-between mb-1">
                                <span>Wifi</span>
                                <span>42%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 42%;" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-between mb-1">
                                <span>Klimaat/Temperatuur</span>
                                <span>28%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 28%;" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-between mb-1">
                                <span>Toegang/Sloten</span>
                                <span>18%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 18%;" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-between mb-1">
                                <span>Apparaten</span>
                                <span>12%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        
                        <div class="alert alert-warning mt-4">
                            <strong><i class="bi bi-exclamation-triangle"></i> Aandachtspunt</strong>
                            <p class="mb-0">Veel meldingen over slechte wifi in zone C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Recente Feedback per Unit</h5>
                        <div>
                            <select class="form-select form-select-sm d-inline-block" style="width: auto;">
                                <option>Alle beoordelingen</option>
                                <option selected>Techniek gerelateerd</option>
                                <option>Laagste beoordelingen</option>
                                <option>Hoogste beoordelingen</option>
                            </select>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Unit</th>
                                        <th>Beoordeling</th>
                                        <th>Feedback</th>
                                        <th>Categorie</th>
                                        <th>Datum</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>`;
    
    // Add feedback from mock data
    if (typeof feedbackData !== 'undefined') {
        feedbackData.forEach(feedback => {
            feedback.comments.forEach(comment => {
                html += `
                    <tr>
                        <td>Unit ${feedback.unit}</td>
                        <td>
                            ${feedback.rating.toFixed(1)}
                            <div>
                                ${generateStarRating(feedback.rating)}
                            </div>
                        </td>
                        <td>${comment.text}</td>
                        <td>${comment.category}</td>
                        <td>${comment.date}</td>
                        <td>`;
                
                // Add status based on rating and category
                if (feedback.rating < 3) {
                    html += `<span class="badge bg-danger">Actie vereist</span>`;
                } else if (feedback.rating < 4) {
                    html += `<span class="badge bg-warning">Controleren</span>`;
                } else {
                    html += `<span class="badge bg-success">Goed</span>`;
                }
                
                html += `</td>
                    </tr>`;
            });
        });
    } else {
        // Fallback if mock data is not available
        html += `
            <tr>
                <td colspan="6" class="text-center">Geen feedback data beschikbaar.</td>
            </tr>`;
    }
    
    html += `
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Vorige</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Volgende</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    feedbackContent.innerHTML = html;
    
    // Initialize feedback chart if Chart.js is available
    if (typeof Chart !== 'undefined') {
        const ctx = document.getElementById('feedbackChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Gemiddelde beoordeling',
                            data: [3.2, 3.3, 3.1, 3.4, 3.3, 3.5, 3.6, 3.5, 3.4, 3.6, 3.7, 3.7],
                            borderColor: 'rgba(13, 110, 253, 1)',
                            backgroundColor: 'rgba(13, 110, 253, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Techniek gerelateerde klachten (%)',
                            data: [35, 32, 38, 30, 33, 28, 26, 27, 29, 25, 24, 24],
                            borderColor: 'rgba(220, 53, 69, 1)',
                            backgroundColor: 'rgba(220, 53, 69, 0.1)',
                            tension: 0.4,
                            fill: true,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 1,
                            max: 5,
                            title: {
                                display: true,
                                text: 'Beoordeling'
                            }
                        },
                        y1: {
                            beginAtZero: true,
                            max: 100,
                            position: 'right',
                            grid: {
                                drawOnChartArea: false
                            },
                            title: {
                                display: true,
                                text: 'Percentage'
                            }
                        }
                    }
                }
            });
        }
    }
    
    // Add event listeners
    const filterSelect = feedbackContent.querySelector('.form-select');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            alert('Filter gewijzigd naar: ' + this.value);
        });
    }
    
    const tableRows = feedbackContent.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const unit = this.cells[0].textContent;
            const feedback = this.cells[2].textContent;
            alert('Details voor feedback: "' + feedback + '" in ' + unit);
        });
    });
    
    // Helper function to generate star rating HTML
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="bi bi-star-fill text-warning"></i>';
        }
        
        if (halfStar) {
            stars += '<i class="bi bi-star-half text-warning"></i>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="bi bi-star text-warning"></i>';
        }
        
        return stars;
    }
}

// Module 7: Systeemintegraties (mocked)
function initIntegratiesModule() {
    const integratiesContent = document.getElementById('integraties-content');
    if (!integratiesContent) return;
    
    // Create HTML content for the integraties module
    let html = `
        <div class="row mb-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Gekoppelde Systemen</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">`;
    
    // Add integration cards from mock data
    if (typeof integrationsData !== 'undefined') {
        integrationsData.forEach(integration => {
            html += `
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <div class="mb-3">
                                <i class="bi bi-${integration.id === 1 ? 'calendar-check' : integration.id === 2 ? 'lightning-charge' : integration.id === 3 ? 'robot' : 'people'}" style="font-size: 48px; color: ${integration.statusClass === 'text-success' ? '#198754' : '#dc3545'};"></i>
                            </div>
                            <h5 class="card-title">${integration.name}</h5>
                            <p class="card-text ${integration.statusClass}">${integration.status}</p>
                            <p class="card-text text-muted">Laatste synchronisatie:<br>${integration.lastSync}</p>
                            <a href="${integration.url}" class="btn btn-outline-primary">Open Dashboard</a>
                        </div>
                    </div>
                </div>`;
        });
    } else {
        // Fallback if mock data is not available
        html += `
            <div class="col-md-12">
                <p class="text-muted">Geen integratie data beschikbaar.</p>
            </div>`;
    }
    
    html += `
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Recente Meldingsoverdrachten</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1">Slim slot defect - Unit 42</h6>
                                    <small>3 uur geleden</small>
                                </div>
                                <p class="mb-1">Automatisch doorgezet naar planningssysteem</p>
                                <small class="text-success">Status: Ingepland voor 15:30</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1">Wifi-storing - Zone C</h6>
                                    <small>5 uur geleden</small>
                                </div>
                                <p class="mb-1">Automatisch doorgezet naar planningssysteem</p>
                                <small class="text-warning">Status: Wachtend op toewijzing</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1">Borstels vervangen - CleanBot 3</h6>
                                    <small>1 dag geleden</small>
                                </div>
                                <p class="mb-1">Automatisch doorgezet naar planningssysteem</p>
                                <small class="text-success">Status: Ingepland voor morgen</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Nieuwe Integratie Toevoegen</h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="integrationTypeSelect" class="form-label">Type Systeem</label>
                            <select class="form-select" id="integrationTypeSelect">
                                <option selected>Selecteer type...</option>
                                <option>Reserveringssysteem</option>
                                <option>Financieel systeem</option>
                                <option>CRM systeem</option>
                                <option>Leverancier API</option>
                                <option>Custom integratie</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="integrationNameInput" class="form-label">Naam</label>
                            <input type="text" class="form-control" id="integrationNameInput" placeholder="Voer naam in...">
                        </div>
                        <div class="mb-3">
                            <label for="integrationUrlInput" class="form-label">API URL</label>
                            <input type="text" class="form-control" id="integrationUrlInput" placeholder="https://...">
                        </div>
                        <div class="mb-3">
                            <label for="integrationKeyInput" class="form-label">API Sleutel</label>
                            <input type="password" class="form-control" id="integrationKeyInput" placeholder="Voer API sleutel in...">
                        </div>
                        <button class="btn btn-primary">Integratie Toevoegen</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    integratiesContent.innerHTML = html;
    
    // Add event listeners
    const integrationLinks = integratiesContent.querySelectorAll('.btn-outline-primary');
    integrationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const integrationName = this.closest('.card').querySelector('.card-title').textContent;
            alert('Openen van dashboard voor ' + integrationName);
        });
    });
    
    const notificationItems = integratiesContent.querySelectorAll('.list-group-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const notificationTitle = this.querySelector('h6').textContent;
            alert('Details voor melding: ' + notificationTitle);
        });
    });
    
    const addIntegrationButton = integratiesContent.querySelector('.btn-primary');
    if (addIntegrationButton) {
        addIntegrationButton.addEventListener('click', function() {
            const typeSelect = document.getElementById('integrationTypeSelect');
            const nameInput = document.getElementById('integrationNameInput');
            
            if (typeSelect.selectedIndex === 0 || !nameInput.value) {
                alert('Vul alle verplichte velden in');
            } else {
                alert('Nieuwe integratie wordt toegevoegd: ' + nameInput.value);
            }
        });
    }
}
