const companyCoords = [12.955051735379312, 80.1422212416568]; // Replace with your latitude & longitude


const map = L.map('map').setView(companyCoords, 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker(companyCoords).addTo(map)
    .bindPopup('AP New Line Facade')
    .openPopup();