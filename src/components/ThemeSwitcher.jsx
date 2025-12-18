import useTheme from "../context/theme/Theme";

const ThemeSwitcher = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = () => {
    if(themeMode === "dark"){
      lightTheme();
    }else{
      darkTheme();
    }
  }
  return (
    <label className="inline-flex items-center me-5 cursor-pointer theme-switcher">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === "dark"}
        onChange={onChangeBtn}
      />
      <span className="select-none me-3 text-sm font-medium text-gray-900 dark:text-white">
        Theme
      </span>
      <div
        className="
          relative w-9 h-5 rounded-full
          bg-gray-300
          dark:bg-gray-700 
          peer-checked:bg-white-600
          after:content-['']
          after:absolute after:top-0.5 after:start-[2px]
          after:h-4 after:w-4 after:rounded-full
          after:bg-white after:transition-all
          peer-checked:after:translate-x-full
        "
      ></div>


    </label>
  );
}
export default ThemeSwitcher;