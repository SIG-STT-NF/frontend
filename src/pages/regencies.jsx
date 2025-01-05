import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LoaderIcon } from "lucide-react";

import { useRegencies } from "@/hooks";
import BaseLayout from "@/layouts/base.layout";

export default function Regencies() {
  const [defaultsOptionsMap] = useState({
    center: [-2.1, 118.36],
    zoom: 4.85,
    scrollWheelZoom: false,
  });

  const {
    data: regencies,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useRegencies();

  let regenciesContent;

  if (isLoading) {
    regenciesContent = (
      <div className="flex items-center justify-center">
        <LoaderIcon className="motion-safe:animate-spin" />
      </div>
    );
  }

  if (isSuccess) {
    regenciesContent = (
      <MapContainer
        center={defaultsOptionsMap.center}
        zoom={defaultsOptionsMap.zoom}
        scrollWheelZoom={defaultsOptionsMap.scrollWheelZoom}
        className="h-[480px] rounded-md "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {regencies.map((regency) => (
          <Marker
            key={regency.id}
            position={[regency.latitude, regency.longitude]}
          >
            <Popup>{regency.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }

  if (isError) {
    regenciesContent = (
      <div>
        <p>Error: {error.message} </p>
      </div>
    );
  }

  return (
    <BaseLayout>
      <section>
        <div className="max-w-6xl px-4 py-8 mx-auto">
          <div className="py-8 space-y-3">
            <h1 className="text-3xl font-bold">Kabupaten / Kota</h1>
            <p>
              Berikut ini beberapa titik koordinat Kabupaten / Kota di
              Indonesia.
            </p>
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
          <div>{regenciesContent}</div>
        </div>
      </section>
    </BaseLayout>
  );
}
