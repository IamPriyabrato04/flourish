"use client";
import { CircleX, EclipseIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdvertisementBanner() {
  const [visible, setVisible] = useState(true);
  return (
    visible && (
      <div className="flex items-center justify-center bg-yellow-400 px-4">
        <p className="text-center not-sm:text-[10px] md:text-sm text-black">
          <EclipseIcon
            className="me-3 -mt-0.5 inline-flex opacity-60"
            size={16}
            aria-hidden="true"
          />
          Get the most out of your app with real-time updates and analytics{" "}
          <span className="text-muted ">·</span>{" "}
          <Link
            href={"/billing"}
            className="font-medium underline hover:no-underline"
          >
            Upgrade now &rarr;
          </Link>
        </p>
        <CircleX
          className="ms-3 inline-flex opacity-45 hover:opacity-80 cursor-pointer"
          size={30}
          onClick={() => setVisible(false)}
          aria-hidden="true"
        />
      </div>
    )
  );
}
