"use client"

import { CheckIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Accent } from "@/components/accent"
import { Eyebrow } from "@/components/eyebrow"
import { BookingForm } from "@/components/leads/booking-form"
import { bookableStays, booking } from "@/content/home"
import { cn } from "@/lib/utils"

// Booking & availability: pick a stay, then send dates through the booking form.
// Shows real listings from `listings` in content/home.ts once there are any.
export function Booking() {
  const [selected, setSelected] = useState<string>()

  return (
    <section id="booking" aria-labelledby="booking-title" className="bg-forest py-20 text-white lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-20">
        <div>
          <Eyebrow>{booking.eyebrow}</Eyebrow>
          <h2 id="booking-title" className="text-title mt-6">
            <Accent text={booking.title} />
          </h2>
          <p className="mt-6 max-w-[520px] text-lg leading-normal">{booking.body}</p>

          <ul className="mt-10 grid gap-3" aria-label="Available stays">
            {bookableStays.map((stay) => {
              const isSelected = selected === stay.name
              return (
                <li key={stay.name}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelected(isSelected ? undefined : stay.name)}
                    className={cn(
                      "flex w-full items-center gap-4 border bg-black/20 p-3 text-left transition-colors hover:border-copper/70 focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-none",
                      isSelected ? "border-copper" : "border-white/10"
                    )}
                  >
                    <span className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden sm:w-32">
                      <Image src={stay.image} alt="" fill sizes="128px" className="object-cover" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="font-heading text-2xl leading-tight font-medium">{stay.name}</span>
                      <span className="text-sm text-white/80">{stay.detail}</span>
                      <span className="text-sm text-white/60">{stay.price}</span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "grid size-7 shrink-0 place-items-center rounded-full border transition-colors",
                        isSelected ? "border-copper bg-copper" : "border-white/30"
                      )}
                    >
                      {isSelected && <CheckIcon className="size-4" />}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="bg-white p-6 text-ink sm:p-8 lg:self-start">
          <h3 className="text-subtitle text-forest">{booking.formTitle}</h3>
          <div className="mt-6">
            {/* Keyed so picking a stay prefills the form */}
            <BookingForm key={selected ?? "none"} stay={selected} onDone={() => setSelected(undefined)} />
          </div>
        </div>
      </div>
    </section>
  )
}
