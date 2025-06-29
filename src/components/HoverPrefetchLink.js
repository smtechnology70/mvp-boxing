"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HoverPrefetchLink({
  href,
  children,
  className,
  ...props
}) {
  const router = useRouter();

  const handleMouseEnter = () => {
    // Prefetch only on desktop
    console.log("hover");
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      console.log("hover route");
      router.prefetch(href);
    }
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
