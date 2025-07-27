import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";

export default function SanityHeader() {
  return (
    <header>
      <nav className="w-full p-4 bg-black text-white flex justify-between items-center">
        <div className="text-lg font-bold">My Studio</div>
        <div>
          <Link href="/" className="flex items-center justify-center gap-x-1">
            <TiArrowBack size={25} />
            Return to home
          </Link>
        </div>
      </nav>
    </header>
  );
}
