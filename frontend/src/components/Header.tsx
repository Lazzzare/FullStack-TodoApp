import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

interface HeaderProps {
  setDarkMode: (e: boolean) => void;
  darkMode: boolean;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <div
      className={`${
        darkMode
          ? "bg-bg-mobile-dark md:bg-bg-desktop-dark"
          : "bg-bg-mobile-light md:md:bg-bg-desktop-light"
      } w-full h-[200px] bg-cover bg-no-repeat`}
    >
      <div className="px-6 pt-10 w-full flex flex-row justify-between items-center">
        <h1 className="text-[25px] md:text-[40px] font-bold tracking-[10px] md:tracking-[15px] text-white">
          TODO
        </h1>
        {darkMode ? (
          <img
            src={Sun}
            alt="MoonIcon"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <img
            src={Moon}
            alt="MoonIcon"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
