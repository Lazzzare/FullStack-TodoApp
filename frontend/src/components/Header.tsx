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
      <div className="pt-10 flex flex-row justify-between items-center w-[327px] mx-auto">
        <h1 className="text-[25px] md:text-[40px] font-bold tracking-[10px] md:tracking-[15px] text-white">
          TODO
        </h1>
        {darkMode ? (
          <img
            className="cursor-pointer"
            src={Sun}
            alt="MoonIcon"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <img
            className="cursor-pointer"
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
