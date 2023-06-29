function isDarkMode() {
  const darkMode = localStorage.getItem("dark_mode");
  return darkMode ? true : false;
}

function setDarkMode(mode: string) {
  localStorage.setItem("dark_mode", mode);
}

export { isDarkMode, setDarkMode };
