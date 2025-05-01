"use client";

import { useEffect, useState } from "react";
import { TbLoader } from "react-icons/tb";

export default function HydrationWrapper({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <TbLoader className="animate-spin w-10 h-10" />
      </div>
    );
  }

  return <>{children}</>;
}
