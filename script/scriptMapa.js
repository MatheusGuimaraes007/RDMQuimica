export default function initMapa(){
    var map = L.map('map').setView([-22.11651052179692, -46.68643656043614], 20);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([-22.11651052179692, -46.68643656043614]).addTo(map)
        .bindPopup('RDM Química está localizada aqui')
        .openPopup();
}