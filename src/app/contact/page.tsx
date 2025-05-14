import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold">Contact</h1>
      <Link href="/" className="mt-4">
        Go back to Home
      </Link>
    </div>
  );
}