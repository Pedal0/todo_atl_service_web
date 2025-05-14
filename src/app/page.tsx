import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold">Ma TODO List (Developpement)</h1>
      <Link href="/contact" className="mt-4">
        Contact
      </Link>
    </div>
  );
}
