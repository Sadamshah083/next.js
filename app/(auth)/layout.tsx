"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgotpassword" },
];

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className=" p-20 bg-gray-500 text-black gap-4  flex ">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href);
        return (
          <Link
            className={
              isActive ? "text-blue-900 font-bold mr-4" : "text-white mr-4"
            }
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};
export default Authlayout;
