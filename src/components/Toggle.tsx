import { useCallback, useState } from "react";
import { useEffect } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { motion, MotionConfig } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <Switch
      checked={enabled}
      onClick={toggleTheme}
      onChange={setEnabled}
      onKeyDown={(e) => e.preventDefault()}
      onKeyUp={(e) => e.preventDefault()}
      className={classNames(
        enabled ? "bg-gray-800" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      )}
    >
      <div className="flex items-center justify-center focus:outline-none">
        <div className="relative">
          <div className="absolute flex items-center">
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "relative pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-900 first-letter:shadow ring-0 transition duration-300 ease-in-out focus:outline-none"
              )}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={
                    enabled
                      ? { scale: 0.1, rotate: 360, opacity: 0 }
                      : { scale: 1, rotate: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <SunIcon className="w-3 h-3 stroke-yellow-400 fill-yellow-400 dark:hidden" />
                </motion.div>
                <motion.div
                  animate={
                    enabled
                      ? { scale: 1, rotate: 360, opacity: 1 }
                      : { scale: 0.1, rotate: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <MoonIcon className="w-3 h-3  dark:stroke-sky-900 fill-sky-900 stroke-sky-900 hidden dark:block" />
                </motion.div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </Switch>
  );
}
