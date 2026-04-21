"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Refund Policy", href: "/refund" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900 hover:opacity-80 transition"
        >
          OrderSync
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  isActive ? "text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}

                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-black transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
