import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import BaseLayout from "@/layouts/base.layout";

export default function Home() {
  const [gempaTerkini, setgempaTerkini] = useState([]);

  useEffect(() => {
    fetch(`https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json`)
      .then((res) => res.json())
      .then((data) => setgempaTerkini(data.Infogempa.gempa));
  }, []);

  return (
    <BaseLayout>
      <section>
        <div className="rounded-md border p-2">
          <MapContainer
            center={[-0.3155398750904368, 117.1371634207888]}
            zoom={4.8}
            scrollWheelZoom={false}
            className="h-[450px] rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {gempaTerkini.map((gempa) => {
              const [latitude, longitude] = gempa.Coordinates.split(",");

              return (
                <Marker position={[latitude, longitude]} key={gempa.Wilayah}>
                  <Popup>
                    <div>
                      <>
                        Waktu & Tanggal: {gempa.Jam}, {gempa.Tanggal}
                      </>
                      <br />
                      <>Wilayah: {gempa.Wilayah}</>
                      <br />
                      <>Kedalaman: {gempa.Kedalaman}</>
                      <br />
                      <>Potensi: {gempa.Potensi}</>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </section>
    </BaseLayout>
  );
}
