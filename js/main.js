(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_THEME = "tldl-theme";
  var STORAGE_FONTSIZE = "tldl-fontsize";

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* ignore: private mode / blocked storage */
    }
  }

  /* ---------- テーマ切り替え (ライト/ダーク) ---------- */
  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      var isDark =
        theme === "dark" ||
        (!theme &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      btn.setAttribute("aria-pressed", String(isDark));
      btn.textContent = isDark ? "☀️ ライト表示" : "🌙 ダーク表示";
    }
  }

  function initTheme() {
    var saved = safeGet(STORAGE_THEME);
    applyTheme(saved);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme");
        var prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        var currentlyDark = current === "dark" || (!current && prefersDark);
        var next = currentlyDark ? "light" : "dark";
        safeSet(STORAGE_THEME, next);
        applyTheme(next);
      });
    }
  }

  /* ---------- 文字サイズ切り替え ---------- */
  function applyFontSize(size) {
    if (size === "s" || size === "m" || size === "l") {
      root.setAttribute("data-fontsize", size);
    } else {
      root.setAttribute("data-fontsize", "m");
      size = "m";
    }
    var buttons = document.querySelectorAll(".fontsize-group button");
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.size === size));
    });
  }

  function initFontSize() {
    var saved = safeGet(STORAGE_FONTSIZE) || "m";
    applyFontSize(saved);
    var buttons = document.querySelectorAll(".fontsize-group button");
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        safeSet(STORAGE_FONTSIZE, b.dataset.size);
        applyFontSize(b.dataset.size);
      });
    });
  }

  /* ---------- モバイルナビ ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 教材ライブラリの絞り込み ---------- */
  function initMaterialFilter() {
    var filterBar = document.querySelector(".filter-bar");
    var cards = document.querySelectorAll(".material-card");
    var emptyState = document.querySelector(".empty-state");
    if (!filterBar || cards.length === 0) return;

    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      btn.setAttribute("aria-pressed", "true");
      var category = btn.dataset.filter;
      var visibleCount = 0;
      cards.forEach(function (card) {
        var match = category === "all" || card.dataset.category === category;
        card.classList.toggle("is-hidden", !match);
        if (match) visibleCount++;
      });
      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initFontSize();
    initNav();
    initMaterialFilter();
  });
})();
