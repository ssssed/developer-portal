import { useState } from "react";

type Theme = "light" | "dark";

export const useTheme = (): [Theme, (el: Theme) => void] => {
  const userTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const initial: Theme = (localStorage.getItem("theme") as Theme) || userTheme;
  const [theme, setTheme] = useState<"light" | "dark">(initial);

  const handleChangeTheme = (updateTheme: "light" | "dark") => {
    setTheme(updateTheme);
    localStorage.removeItem("theme");
    localStorage.setItem("theme", updateTheme);
  };
  return [theme, handleChangeTheme];
};
