(function () {
  function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function updateToggleLabel() {
    var toggle = document.querySelector(".theme-toggle");
    var isDark = currentTheme() === "dark";

    if (!toggle) return;

    toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  window.toggleTheme = function () {
    var nextTheme = currentTheme() === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    updateToggleLabel();

    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {}
  };

  updateToggleLabel();
})();