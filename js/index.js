const video = document.getElementById('videoAd');

  const sources = [
    'images/ad-live-tiktok-nlp24jun.mp4',
  ];
  let currentVideo = 0;

  // Cambiar video al terminar el anterior
  video.addEventListener('ended', () => {
    currentVideo = (currentVideo + 1) % sources.length;
    video.src = sources[currentVideo];
    video.load();  // Cargar nuevo video
    video.play();  // Reproducir nuevo video
  });

  // Prevención de controles nativos
  video.addEventListener('contextmenu', e => e.preventDefault());
  video.addEventListener('keydown', e => e.preventDefault());



document.addEventListener("DOMContentLoaded", function() {

let foto_actual_visor = 0;
let autoplay_activo_visor = true;
let intervalo_visor;

const fotos_visor = [
  "images/merch-2025/merch-01.jpg",
  "images/merch-2025/merch-02.jpg",
  "images/merch-2025/merch-03.jpg",
  "images/merch-2025/merch-04.jpg",
  "images/merch-2025/merch-05.jpg",
  "images/merch-2025/merch-06.jpg",
  "images/merch-2025/merch-07.jpg",
  "images/merch-2025/merch-08.jpg", // ✅ Asegúrate de incluirlo
  "images/merch-2025/merch-09.jpg",
  "images/merch-2025/merch-10.jpg",
  "images/merch-2025/merch-11.jpg",
  "images/merch-2025/merch-12.jpg",
];

function actualizar_foto_visor() {
  const imagen = document.getElementById("imagen_foto_proyecto");
  if (!imagen) {
    console.error("❌ No se encontró el elemento #imagen_foto_proyecto");
    return;
  }
  imagen.style.opacity = 0;
  setTimeout(() => {
    const nuevaSrc = fotos_visor[foto_actual_visor];
    console.log("🖼️ Cambiando a:", nuevaSrc);
    imagen.src = nuevaSrc;
    imagen.style.opacity = 1;
  }, 150);
}

function foto_anterior_visor() {
  console.log("⬅️ Anterior");
  foto_actual_visor = (foto_actual_visor - 1 + fotos_visor.length) % fotos_visor.length;
  actualizar_foto_visor();
}

function foto_siguiente_visor() {
  console.log("➡️ Siguiente");
  foto_actual_visor = (foto_actual_visor + 1) % fotos_visor.length;
  actualizar_foto_visor();
}

function alternar_autoplay_visor() {
  autoplay_activo_visor = !autoplay_activo_visor;
  const boton = document.getElementById("boton_autoplay_visor");
  if (boton) {
    boton.textContent = autoplay_activo_visor ? "⏸ Pausar" : "▶ Reanudar";
  }
}

function iniciar_autoplay_visor() {
  intervalo_visor = setInterval(() => {
    if (autoplay_activo_visor) {
      foto_siguiente_visor();
    }
  }, 4000);
}

// Swipe móvil
const visor = document.getElementById("contenedor_visor_fotos");
if (visor) {
  let inicio_x_visor = 0;
  let fin_x_visor = 0;

  visor.addEventListener("touchstart", e => {
    inicio_x_visor = e.changedTouches[0].screenX;
  }, { passive: true });

  visor.addEventListener("touchend", e => {
    fin_x_visor = e.changedTouches[0].screenX;
    interpretar_swipe_visor();
  });

  function interpretar_swipe_visor() {
    const diferencia = inicio_x_visor - fin_x_visor;
    if (diferencia > 50) foto_siguiente_visor();
    else if (diferencia < -50) foto_anterior_visor();
  }
} else {
  console.warn("⚠️ No se encontró #contenedor_visor_fotos para swipe");
}

// 🚀 Iniciar todo
actualizar_foto_visor();
iniciar_autoplay_visor();

});

