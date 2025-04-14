// Robot animations for Bright Dashboard

// Animation paths for GrassBots
const grassBotPaths = [
  {
    id: 'grassbot1',
    path: [
      { x: 200, y: 350, duration: 0 },
      { x: 300, y: 350, duration: 10 },
      { x: 300, y: 250, duration: 10 },
      { x: 200, y: 250, duration: 10 },
      { x: 200, y: 350, duration: 10 }
    ]
  },
  {
    id: 'grassbot2',
    path: [
      { x: 600, y: 250, duration: 0 },
      { x: 700, y: 250, duration: 12 },
      { x: 700, y: 350, duration: 12 },
      { x: 600, y: 350, duration: 12 },
      { x: 600, y: 250, duration: 12 }
    ]
  }
];

// CleanBot locations (in units)
const cleanBotLocations = [
  { id: 'cleanbot1', unitId: 12, x: 250, y: 225, active: true },
  { id: 'cleanbot2', unitId: 23, x: 650, y: 225, active: false },
  { id: 'cleanbot3', unitId: 34, x: 250, y: 425, active: false },
  { id: 'cleanbot4', unitId: 42, x: 650, y: 425, active: true }
];

// Initialize robot animations
function initRobotAnimations() {
  // Add map background
  const mapContainer = document.querySelector('.park-map-container');
  if (!mapContainer) return;
  
  // Clear existing content
  mapContainer.innerHTML = '';
  
  // Add background image
  const mapBackground = document.createElement('img');
  mapBackground.src = 'images/park_map_background.svg';
  mapBackground.style.position = 'absolute';
  mapBackground.style.top = '0';
  mapBackground.style.left = '0';
  mapBackground.style.width = '100%';
  mapBackground.style.height = '100%';
  mapBackground.style.borderRadius = '5px';
  mapContainer.appendChild(mapBackground);
  
  // Add units
  addUnitsToMap(mapContainer);
  
  // Add CleanBots
  addCleanBotsToMap(mapContainer);
  
  // Add GrassBots
  addGrassBotsToMap(mapContainer);
}

// Add units to map
function addUnitsToMap(container) {
  // Get accommodation data
  if (typeof accommodationsData === 'undefined') return;
  
  accommodationsData.forEach(unit => {
    const unitElement = document.createElement('div');
    unitElement.className = 'map-unit';
    unitElement.setAttribute('data-unit', unit.id);
    
    // Set position based on unit ID
    let x, y;
    switch(unit.id) {
      case 12:
        x = 250; y = 225;
        break;
      case 23:
        x = 650; y = 225;
        break;
      case 34:
        x = 250; y = 425;
        break;
      case 42:
        x = 650; y = 425;
        break;
      default:
        x = 0; y = 0;
    }
    
    // Set styles
    unitElement.style.position = 'absolute';
    unitElement.style.left = `${x - 25}px`;
    unitElement.style.top = `${y - 25}px`;
    unitElement.style.width = '50px';
    unitElement.style.height = '50px';
    unitElement.style.backgroundColor = getUnitColor(unit.health);
    unitElement.style.borderRadius = '5px';
    unitElement.style.display = 'flex';
    unitElement.style.alignItems = 'center';
    unitElement.style.justifyContent = 'center';
    unitElement.style.color = 'white';
    unitElement.style.fontWeight = 'bold';
    unitElement.style.cursor = 'pointer';
    unitElement.style.zIndex = '10';
    unitElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    unitElement.textContent = unit.id;
    
    // Add click event
    unitElement.addEventListener('click', function() {
      showUnitDetails(unit.id);
    });
    
    container.appendChild(unitElement);
  });
}

// Get color based on unit health
function getUnitColor(health) {
  if (health >= 8) return '#28a745'; // Green
  if (health >= 6) return '#ffc107'; // Yellow
  return '#dc3545'; // Red
}

// Add CleanBots to map
function addCleanBotsToMap(container) {
  cleanBotLocations.forEach(bot => {
    const botElement = document.createElement('div');
    botElement.id = bot.id;
    botElement.className = 'map-robot cleanbot';
    
    // Set position
    botElement.style.position = 'absolute';
    botElement.style.left = `${bot.x - 20}px`;
    botElement.style.top = `${bot.y - 20}px`;
    botElement.style.width = '40px';
    botElement.style.height = '40px';
    botElement.style.zIndex = '20';
    botElement.style.transition = 'all 0.5s ease-in-out';
    
    // Add robot image
    const botImage = document.createElement('img');
    botImage.src = 'images/robot_cleanbot.svg';
    botImage.style.width = '100%';
    botImage.style.height = '100%';
    botElement.appendChild(botImage);
    
    // Add animation for active CleanBots
    if (bot.active) {
      // Add pulsing animation
      botElement.style.animation = 'pulse 2s infinite';
    } else {
      // Add opacity for inactive bots
      botElement.style.opacity = '0.6';
    }
    
    // Add tooltip
    botElement.title = `CleanBot in Unit ${bot.unitId}`;
    
    container.appendChild(botElement);
  });
  
  // Add CSS for pulse animation
  if (!document.getElementById('robot-animations-css')) {
    const style = document.createElement('style');
    style.id = 'robot-animations-css';
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      
      @keyframes moveBot {
        0% { transform: translate(0, 0); }
        100% { transform: translate(var(--moveX), var(--moveY)); }
      }
    `;
    document.head.appendChild(style);
  }
}

// Add GrassBots to map
function addGrassBotsToMap(container) {
  grassBotPaths.forEach(botPath => {
    const botElement = document.createElement('div');
    botElement.id = botPath.id;
    botElement.className = 'map-robot grassbot';
    
    // Set initial position
    const initialPos = botPath.path[0];
    botElement.style.position = 'absolute';
    botElement.style.left = `${initialPos.x - 20}px`;
    botElement.style.top = `${initialPos.y - 20}px`;
    botElement.style.width = '40px';
    botElement.style.height = '40px';
    botElement.style.zIndex = '20';
    botElement.style.transition = 'all 1s linear';
    
    // Add robot image
    const botImage = document.createElement('img');
    botImage.src = 'images/robot_grassbot.svg';
    botImage.style.width = '100%';
    botImage.style.height = '100%';
    botElement.appendChild(botImage);
    
    // Add tooltip
    botElement.title = `GrassBot ${botPath.id.replace('grassbot', '')}`;
    
    container.appendChild(botElement);
    
    // Start animation
    animateGrassBot(botElement, botPath.path, 0);
  });
}

// Animate GrassBot along path
function animateGrassBot(botElement, path, currentIndex) {
  // Get current and next positions
  const current = path[currentIndex];
  const nextIndex = (currentIndex + 1) % path.length;
  const next = path[nextIndex];
  
  // Calculate direction for rotation
  const dx = next.x - current.x;
  const dy = next.y - current.y;
  let angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
  // Move bot to next position with rotation
  setTimeout(() => {
    botElement.style.transition = `all ${next.duration}s linear`;
    botElement.style.left = `${next.x - 20}px`;
    botElement.style.top = `${next.y - 20}px`;
    botElement.style.transform = `rotate(${angle}deg)`;
    
    // Continue to next point
    setTimeout(() => {
      animateGrassBot(botElement, path, nextIndex);
    }, next.duration * 1000);
  }, 100);
}

// Show unit details when clicked
function showUnitDetails(unitId) {
  const unitDetails = document.getElementById('unitDetails');
  const unitTitle = document.getElementById('unitTitle');
  const unitLockStatus = document.getElementById('unitLockStatus');
  const unitTemp = document.getElementById('unitTemp');
  const unitWifi = document.getElementById('unitWifi');
  const unitOccupancy = document.getElementById('unitOccupancy');
  
  if (!unitDetails || !unitTitle) return;
  
  // Find unit data
  if (typeof accommodationsData !== 'undefined') {
    const unitData = accommodationsData.find(acc => acc.id == unitId);
    
    if (unitData) {
      unitTitle.textContent = unitData.name;
      
      if (unitLockStatus) {
        unitLockStatus.textContent = unitData.lock.status;
        unitLockStatus.className = unitData.lock.statusClass;
      }
      
      if (unitTemp) {
        unitTemp.textContent = unitData.temperature.current + '°C';
      }
      
      if (unitWifi) {
        unitWifi.textContent = unitData.wifi.status;
        unitWifi.className = unitData.wifi.statusClass;
      }
      
      if (unitOccupancy) {
        unitOccupancy.textContent = unitData.occupancy.status;
        unitOccupancy.className = unitData.occupancy.statusClass;
      }
      
      // Show the details panel
      unitDetails.style.display = 'block';
      
      // Highlight the selected unit
      const units = document.querySelectorAll('.map-unit');
      units.forEach(unit => {
        if (unit.getAttribute('data-unit') == unitId) {
          unit.style.boxShadow = '0 0 0 3px #0d6efd';
        } else {
          unit.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        }
      });
      
      // Check if there's a CleanBot in this unit
      const cleanBot = cleanBotLocations.find(bot => bot.unitId == unitId);
      if (cleanBot) {
        // Add info about CleanBot to details
        const cleanBotInfo = document.createElement('div');
        cleanBotInfo.className = 'unit-status-item';
        cleanBotInfo.innerHTML = `
          <i class="bi bi-robot text-info"></i> CleanBot: ${cleanBot.active ? '<span class="text-success">Actief</span>' : '<span class="text-secondary">Inactief</span>'}
        `;
        
        // Add to details if not already there
        const existingInfo = unitDetails.querySelector('.unit-status-item:last-child + .unit-status-item');
        if (!existingInfo || !existingInfo.innerHTML.includes('CleanBot')) {
          unitDetails.insertBefore(cleanBotInfo, unitDetails.querySelector('button'));
        }
      }
    }
  }
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for plattegrond tab
  const plattegrondTab = document.getElementById('nav-plattegrond');
  if (plattegrondTab) {
    plattegrondTab.addEventListener('click', function() {
      // Initialize robot animations when plattegrond tab is clicked
      setTimeout(initRobotAnimations, 100);
    });
  }
});
