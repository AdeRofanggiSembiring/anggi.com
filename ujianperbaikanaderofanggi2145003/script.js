// Lokasi Kota Medan
const medanLocation = [3.5952, 98.6722];

// Inisialisasi peta
const map = L.map('map').setView(medanLocation, 13);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Data lokasi pasar
const pasarMedan = [
  { name: "Pasar Petisah", lat: 3.5833, lng: 98.6741 },
  { name: "Pasar Beruang", lat: 3.5878, lng: 98.6787 },
  { name: "Pasar Simpang Limun", lat: 3.5823, lng: 98.6701 },
  // Tambahkan pasar lainnya
];

// Tambahkan marker untuk setiap pasar
pasarMedan.forEach((pasar) => {
  L.marker([pasar.lat, pasar.lng])
    .addTo(map)
    .bindPopup(`<b>${pasar.name}</b>`);
});
