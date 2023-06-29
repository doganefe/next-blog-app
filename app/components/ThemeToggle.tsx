import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function Skeleton() {
  return (
    <div role="status">
      <div className="h-[26.26px] w-[44px]"></div>
    </div>
  );
}

function MyToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => setisMounted(true), []);

  return (
    <div className="max-md:mt-1">
      {isMounted ? (
        <Switch
          checked={theme === "dark"}
          onChange={(checked) => {
            if (checked) setTheme("dark");
            else setTheme("light");
          }}
        >
          <span
            className={`${
              theme === "dark" ? "bg-white" : "bg-black"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                theme === "dark"
                  ? "translate-x-6 bg-black"
                  : "translate-x-1 bg-white "
              } inline-block h-4 w-4 transform rounded-full transition`}
            />
          </span>
        </Switch>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default MyToggle;
