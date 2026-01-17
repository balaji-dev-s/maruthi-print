const companyCoords = [12.955051735379312, 80.1422212416568];
const map = L.map('map').setView(companyCoords, 30);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker(companyCoords).addTo(map).bindPopup('AP New Line Facade').openPopup();