  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("toggleTheme").textContent = "☀️ Modo Claro";
  }

  // Botón de alternar tema
  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      document.getElementById("toggleTheme").textContent = "☀️ Modo Claro";
    } else {
      localStorage.setItem("theme", "light");
      document.getElementById("toggleTheme").textContent = "🌙 Modo Oscuro";
    }
  });
