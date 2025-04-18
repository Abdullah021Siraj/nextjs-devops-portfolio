import { ModeToggle } from "@/components/ui/modetoggle";
import Link from "next/link";

const links = {
  about: "#about",
  project: "#projects",
  resume: "https://docs.google.com/document/d/1hyCr2I1_KyZlqo9ot1s6Onsn_rq0AtEtsCv7Mvfyuu8/export?format=pdf",
  contact: "#contact",
};

export const Navbar = () => {
  return (
    <nav className="m-2 sm:m-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono text-gray-700 dark:text-gray-300 sm:ml-4 md:ml-10">
          Abdullah Siraj
        </h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <ol className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 text-sm sm:text-lg md:text-xl lg:text-2xl font-mono text-gray-500 dark:text-gray-400">
            {Object.entries(links).map(([name, path]) => (
              <li key={name}>
                <Link
                  href={path}
                  className="hover:underline underline-offset-4 decoration-2 transition duration-200 ease-in-out px-1 sm:px-2 md:mr-2"
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              </li>
            ))}
          </ol>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};