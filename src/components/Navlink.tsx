"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkType = {
  title: string;
  url: string;
};
function Navlink({ link }: { link: LinkType }) {
  const pathName = usePathname();

  return (
    <Link
      href={link.url}
      className={`${
        pathName === link.url ? "bg-black text-white " : ""
      } p-1 rounded-md font-bold`}
    >
      {link.title}
    </Link>
  );
}

export default Navlink;
