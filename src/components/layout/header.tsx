import { LoginButton } from "../buttons/login-button";

export const Header = () => {
  return (
    <header className="body-font ">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Savantly Nexus</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-200">First Link</a>
          <a className="mr-5 hover:text-gray-200">Second Link</a>
          <a className="mr-5 hover:text-gray-200">Third Link</a>
          <a className="mr-5 hover:text-gray-200">Fourth Link</a>
        </nav>
        <LoginButton />
      </div>
    </header>
  );
};
