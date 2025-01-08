import { useState } from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";
import { LoaderIcon } from "lucide-react";
import { Icon } from "leaflet";

import { dataLayers } from "@/data/data-layers";
import { useRegencies } from "@/hooks";

import BaseLayout from "@/layouts/base.layout";
import ReusableMapTile from "@/components/shared/reusable-map-tile";

export default function Regencies() {
  const [defaultsOptionsMap] = useState({
    center: [-2.1, 118.36],
    zoom: 4.85,
    scrollWheelZoom: false,
  });

  // Customizable layers
  const [layers] = useState(dataLayers);

  const [layer, setLayer] = useState({
    name: "OpenStreetMap",
    attribution: "OpenStreetMap",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  });

  const handleLayerChange = (e) => {
    const selectedLayer = layers.find((layer) => layer.url === e.target.value);
    setLayer(selectedLayer);
  };

  // Custom Icon
  const mapPinIcon = new Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [20, 32],
    iconAnchor: [12, 32],
    popupAnchor: [1, -34],
    shadowSize: [32, 32],
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
        className="h-[480px] rounded-md z-0"
      >
        <ReusableMapTile attribution={layer.attribution} url={layer.url} />
        {regencies.map((regency) => (
          <Marker
            key={regency.id}
            position={[regency.latitude, regency.longitude]}
            icon={mapPinIcon}
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

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <label htmlFor="layer">Pilih tema peta:</label>
                <select
                  id="layer"
                  value={layer.url}
                  onChange={handleLayerChange}
                  className="p-2 border rounded-lg focus:outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  {layers.map((layer) => (
                    <option key={layer.name} value={layer.url}>
                      {layer.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>{regenciesContent}</div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
