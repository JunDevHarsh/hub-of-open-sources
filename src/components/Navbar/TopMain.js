import Link from "next/link";
import Desktop from "@/components/Menubar/Desktop";

export default function TopNavbar() {
  return (
    <nav className="relative px-4 pt-3 pb-3 md:pb-0 flex flex-row items-start justify-start w-full">
      <div className="flex-1 max-w-[255px] w-full">
        <Link href="/" aria-label="Go to home page" title="Hub Of Open-Sources">
          <h1 className="text-2xl text-center text-white font-medium tracking-wide">
            Hub Of Open-Sources
          </h1>
        </Link>
      </div>
      <div className="hidden md:inline-block ml-10 w-auto flex-1">
        <Desktop />
      </div>
    </nav>
  );
}