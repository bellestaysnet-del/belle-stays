"use client"

import "leaflet/dist/leaflet.css"

import L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import { office, site } from "@/content/home"

// OpenStreetMap's public tiles need no key but are meant for light use. For
// production, set NEXT_PUBLIC_MAP_TILE_URL to a provider such as MapTiler or Stadia.
const TILE_URL =
  process.env.NEXT_PUBLIC_MAP_TILE_URL ?? "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

// Round 64px copper badge with a pointer tail.
const officeIcon = L.divIcon({
  className: "",
  iconSize: [64, 64],
  iconAnchor: [32, 76],
  popupAnchor: [0, -76],
  html: `<span style="position:relative;display:grid;place-items:center;width:64px;height:64px;border-radius:9999px;background:#ad7851;box-shadow:0 1px 2px rgb(0 0 0/.25)">
    <img src="/icons/map-building.svg" alt="" width="26" height="26" />
    <span style="position:absolute;top:56px;left:22px;border:10px solid transparent;border-top:20px solid #ad7851;border-bottom:0"></span>
  </span>`,
})

export default function LocationMap() {
  return (
    <div className="relative size-full">
      <MapContainer
        center={office.position}
        zoom={15}
        scrollWheelZoom={false}
        dragging={!L.Browser.mobile}
        className="size-full"
        attributionControl
      >
        <TileLayer attribution={TILE_ATTRIBUTION} url={TILE_URL} />
        <Marker position={office.position} icon={officeIcon}>
          <Popup>
            <strong>{office.name}</strong>
            <br />
            {office.note}
          </Popup>
        </Marker>
      </MapContainer>

      {/* Office card */}
      <div className="absolute bottom-4 left-4 z-[400] max-w-[calc(100%-2rem)] bg-white/95 p-4 text-sm shadow-md backdrop-blur">
        <p className="font-medium text-forest">{office.name}</p>
        <p className="mt-1 text-ink/80">{site.officeAddress.join(", ")}</p>
        <p className="mt-1 text-xs text-muted-foreground">{office.note}</p>
        <a
          href={site.officeMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-xs font-medium text-copper hover:underline"
        >
          Get directions
        </a>
      </div>
    </div>
  )
}
