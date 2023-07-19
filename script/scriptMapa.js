export default function initMapa() {
  var map = L.map('map').setView([-22.116826, -46.684173], 20);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([-22.116826, -46.684173])
    .addTo(map)
    .bindPopup('RDM Química está localizada aqui')
    .openPopup();
}
