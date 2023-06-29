import { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";
import { isDarkMode, setDarkMode } from "../utils";

function MyToggle() {
  const [enabled, setEnabled] = useState(isDarkMode());

  return (
    <Switch
      checked={enabled}
      onChange={(checked) => {
        setEnabled(checked);
        if (checked) {
          document.documentElement.classList.add("dark");
          setDarkMode("true");
        } else {
          document.documentElement.classList.remove("dark");
          setDarkMode("");
        }
      }}
      as={Fragment}
    >
      {({ checked }) => (
        <button
          className={`${
            checked ? "bg-white" : "bg-black"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? "translate-x-6 bg-black" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </button>
      )}
    </Switch>
  );
}

export default MyToggle;
