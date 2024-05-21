
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen relative" id="home">
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/50"></div>

        <div className="space-y-20 z-10">
          <h1 className="text-5xl font-bold text-white">Recharge online,Travel stress-free</h1>

          <div className="flex flex-col items-center justify-center gap-4">
            <Link href="/sign-up" className="bg-white hover:bg-white/90 transition duration-100 rounded-3xl px-[110px] py-[1rem] text-black font-bold max-w-md w-full text-center">Open an account now</Link>
            <Link href="/sign-in" className="bg-transparent hover:bg-white/10 transition duration-100 rounded-3xl border border-white text-white px-[110px] py-[1rem] max-w-md w-full font-bold text-center">Sign in</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
