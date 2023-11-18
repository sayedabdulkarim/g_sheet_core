function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector(".theme_btn .material-icons");

  if (body.classList.contains("light-theme")) {
    body.classList.replace("light-theme", "dark-theme");
    themeIcon.textContent = "wb_dark_mode";
    themeIcon.style.color = "white";
    localStorage.setItem("theme", "dark-theme");
  } else {
    body.classList.replace("dark-theme", "light-theme");
    themeIcon.textContent = "wb_sunny";
    themeIcon.style.color = "black";
    localStorage.setItem("theme", "light-theme");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(savedTheme);

  const themeIcon = document.querySelector(".theme_btn .material-icons");
  if (savedTheme === "dark-theme") {
    themeIcon.textContent = "wb_dark_mode";
    themeIcon.style.color = "white"; // or themeIcon.classList.add('dark-theme-icon');
  } else {
    themeIcon.textContent = "wb_sunny";
    themeIcon.style.color = "black"; // or themeIcon.classList.remove('dark-theme-icon');
  }
});
