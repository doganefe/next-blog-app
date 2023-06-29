function isDarkMode() {
  const darkMode = window.localStorage.getItem("dark_mode");
  return darkMode ? true : false;
}

function setDarkMode(mode: string) {
  window.localStorage.setItem("dark_mode", mode);
}

export { isDarkMode, setDarkMode };
