(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile nav toggle */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  var isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var ink = isDark ? "#c3c2b7" : "#52514e";
  var grid = isDark ? "#2c2c2a" : "#e1e0d9";

  /* ---------------------------------------------------------
     Featured map — zonas agroecológicas de demostración
     (datos ilustrativos, no catastro oficial)
     --------------------------------------------------------- */
  var mapEl = document.getElementById("map");
  if (mapEl && window.L) {
    var map = L.map("map", {
      scrollWheelZoom: false,
      center: [-36.83, -73.02],
      zoom: 11,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);

    var zonas = [
      {
        nombre: "Zona de riego",
        color: "#2a78d6",
        coords: [
          [-36.79, -73.08], [-36.79, -73.02], [-36.83, -73.02], [-36.83, -73.08],
        ],
      },
      {
        nombre: "Zona de secano",
        color: "#eb6834",
        coords: [
          [-36.83, -73.08], [-36.83, -73.0], [-36.88, -73.0], [-36.88, -73.08],
        ],
      },
      {
        nombre: "Zona silvoagropecuaria",
        color: "#1baf7a",
        coords: [
          [-36.79, -73.0], [-36.79, -72.93], [-36.86, -72.93], [-36.86, -73.0],
        ],
      },
    ];

    zonas.forEach(function (zona) {
      L.polygon(zona.coords, {
        color: zona.color,
        weight: 2,
        fillColor: zona.color,
        fillOpacity: 0.28,
      })
        .addTo(map)
        .bindPopup("<strong>" + zona.nombre + "</strong><br>Dato de demostración");
    });

    var bounds = L.latLngBounds(zonas.flatMap(function (z) { return z.coords; }));
    map.fitBounds(bounds, { padding: [12, 12] });

    mapEl.addEventListener("click", function () { map.scrollWheelZoom.enable(); });
    mapEl.addEventListener("mouseleave", function () { map.scrollWheelZoom.disable(); });
  }

  /* ---------------------------------------------------------
     NDVI line chart — serie mensual simulada
     --------------------------------------------------------- */
  var ndviEl = document.getElementById("ndviChart");
  if (ndviEl && window.Chart) {
    new Chart(ndviEl, {
      type: "line",
      data: {
        labels: ["Sep", "Oct", "Nov", "Dic", "Ene", "Feb", "Mar"],
        datasets: [
          {
            label: "NDVI promedio",
            data: [0.38, 0.47, 0.58, 0.71, 0.76, 0.62, 0.44],
            borderColor: "#2a78d6",
            backgroundColor: "rgba(42,120,214,0.12)",
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: "#2a78d6",
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) { return "NDVI: " + ctx.parsed.y.toFixed(2); },
            },
          },
        },
        scales: {
          y: {
            min: 0,
            max: 1,
            grid: { color: grid },
            ticks: { color: ink },
          },
          x: {
            grid: { display: false },
            ticks: { color: ink },
          },
        },
      },
    });
  }

  /* ---------------------------------------------------------
     Rendimiento agrícola — barras por comuna (ejemplo)
     --------------------------------------------------------- */
  var yieldEl = document.getElementById("yieldChart");
  if (yieldEl && window.Chart) {
    new Chart(yieldEl, {
      type: "bar",
      data: {
        labels: ["Chillán", "Los Ángeles", "Concepción", "Talca", "Curicó"],
        datasets: [
          {
            label: "Rendimiento (ton/ha)",
            data: [8.2, 9.6, 7.1, 10.4, 8.9],
            backgroundColor: "#1baf7a",
            borderRadius: 4,
            maxBarThickness: 36,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) { return ctx.parsed.y + " ton/ha"; },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: grid },
            ticks: { color: ink },
          },
          x: {
            grid: { display: false },
            ticks: { color: ink },
          },
        },
      },
    });
  }
})();
