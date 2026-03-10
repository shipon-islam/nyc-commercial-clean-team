"use client";

import { Icon } from "@iconify/react";
import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";

const style =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

export default function ContactMap({
  center = [-73.9442, 40.6782],
  zoom = 13,
}) {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style,
      center,
      zoom,
    });

    mapRef.current = map;

    // Marker
    const markerEl = document.createElement("div");
    markerEl.className =
      "w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow";

    const popup = new maplibregl.Popup({ offset: 20 }).setHTML(`
      <div>
        <p style="font-weight:600">NYC Commercial Clean Team</p>
        <p style="font-size:12px;color:gray">
          66 Brooklyn Golden Street, New York
        </p>
      </div>
    `);

    new maplibregl.Marker(markerEl)
      .setLngLat(center)
      .setPopup(popup)
      .addTo(map);

    return () => map.remove();
  }, [center, zoom]);

  const zoomIn = () => {
    mapRef.current?.zoomIn();
  };

  const zoomOut = () => {
    mapRef.current?.zoomOut();
  };

  return (
    <div className="relative w-full h-125 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />

      {/* Controls */}
      <div className="absolute right-3 bottom-3 flex flex-col bg-white dark:bg-gray-700 border rounded-md shadow">
        <button
          onClick={zoomIn}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-500"
        >
          <Icon icon="mdi:plus" width="18" />
        </button>

        <button
          onClick={zoomOut}
          className="p-2 border-t hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Icon icon="mdi:minus" width="18" />
        </button>
      </div>
    </div>
  );
}