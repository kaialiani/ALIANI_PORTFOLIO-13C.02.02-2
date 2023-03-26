function darkTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var isDarkMode = element.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}

var isDarkMode = localStorage.getItem("dark-mode");

if (isDarkMode === "true") {
  document.body.classList.add("dark-mode");
}

