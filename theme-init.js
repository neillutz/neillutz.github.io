(function () {
  try {
    var theme = localStorage.getItem("theme");

    if (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }

    document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
  } catch (error) {}
})();
