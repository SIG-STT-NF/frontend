import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import BaseLayout from "@/layouts/base.layout";
import { provincesBali } from "@/data/provinces-bali";

export default function Thematic() {
  const [defaultsOptionsMap] = useState({
    center: [-8.4598, 115.1266],
    zoom: 8.66,
    scrollWheelZoom: false,
  });

  return (
    <BaseLayout>
      <section>
        <div className="max-w-6xl px-4 py-8 mx-auto">
          <MapContainer
            center={defaultsOptionsMap.center}
            zoom={defaultsOptionsMap.zoom}
            scrollWheelZoom={defaultsOptionsMap.scrollWheelZoom}
            className="h-[480px] rounded-md"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              data={provincesBali.features}
              attribution="provinsi bali"
            />
          </MapContainer>
        </div>
      </section>
    </BaseLayout>
  );
}
