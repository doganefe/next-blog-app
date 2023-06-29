function isDarkMode() {
  if (typeof window !== "undefined") {
    const darkMode = localStorage.getItem("dark_mode");
    return darkMode ? true : false;
  } else {
    return false;
  }
}

function setDarkMode(mode: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("dark_mode", mode);
  }
}

export { isDarkMode, setDarkMode };
