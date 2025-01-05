import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LoaderIcon } from "lucide-react";

import { useProvinces } from "@/hooks";
import BaseLayout from "@/layouts/base.layout";

export default function Provinces() {
  const [defaultsOptionsMap] = useState({
    center: [-2.1, 118.36],
    zoom: 4.85,
    scrollWheelZoom: false,
  });

  const {
    data: provinces,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useProvinces();

  let provincesContent;

  if (isLoading) {
    provincesContent = (
      <div className="flex items-center justify-center">
        <LoaderIcon className="motion-safe:animate-spin" />
      </div>
    );
  }

  if (isSuccess) {
    provincesContent = (
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
        {provinces.map((province) => (
          <Marker
            key={province.id}
            position={[province.latitude, province.longitude]}
          >
            <Popup>{province.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }

  if (isError) {
    provincesContent = <p>Error: {error.message}</p>;
  }

  return (
    <BaseLayout>
      <section>
        <div className="max-w-6xl px-4 py-8 mx-auto">
          <div className="flex gap-3 py-8">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold">Provinsi di Indonesia</h1>
              <p>Berikut ini beberapa titik koordinat Provinsi di Indonesia.</p>
              <p>
                Sumber data:{" "}
                <a
                  className="text-sm italic text-blue-500 underline"
                  href="https://github.com/yusufsyaifudin/wilayah-indonesia"
                >
                  Wilayah Indonesia (Yusuf Syaifudion)
                </a>
              </p>
            </div>
          </div>
          <div>{provincesContent}</div>
        </div>
      </section>
    </BaseLayout>
  );
}
