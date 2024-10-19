import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="w-full h-screen  flex justify-center items-center bg-black">
      <div className="w-1/4 h-1/4">
        <Image src="/404.svg" width={500} height={500} alt="404" />
      </div>
      <Link href="/blog">Back Home</Link>
    </div>
  );
}
