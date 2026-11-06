"use client"

import dynamic from "next/dynamic"

import { Accent } from "@/components/accent"
import { Eyebrow } from "@/components/eyebrow"
import { office } from "@/content/home"

// Leaflet needs `window`, so the map only renders in the browser.
const LocationMap = dynamic(() => import("@/components/sections/location-map"), {
  ssr: false,
  loading: () => <div className="size-full animate-pulse bg-[#eeeeec]" />,
})

// The company's business office. Kept visibly separate from the rental stays.
export function Location() {
  return (
    <section id="office" aria-labelledby="office-title" className="bg-sand">
      <div className="container-site flex flex-col gap-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div className="flex flex-col gap-5">
          <Eyebrow>{office.eyebrow}</Eyebrow>
          <h2 id="office-title" className="text-title text-ink">
            <Accent text={office.title} />
          </h2>
        </div>
        <p className="max-w-[440px] text-lg leading-normal text-ink/80">
          {office.body}{" "}
          <a href="#booking" className="font-medium text-copper underline-offset-4 hover:underline">
            {office.bodyLink}
          </a>
          .
        </p>
      </div>
      <div className="h-[420px] bg-[#eeeeec] sm:h-auto sm:aspect-[1440/500]">
        <LocationMap />
      </div>
    </section>
  )
}
