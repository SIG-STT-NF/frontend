import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import { provincesBali } from "@/data/provinces-bali";

const getColor = (landArea) => {
  return landArea > 20000
    ? "#005824"
    : landArea > 15000
    ? "#238b45"
    : landArea > 13000
    ? "#41ae76"
    : landArea > 9000
    ? "#66c2a4"
    : landArea > 5000
    ? "#99d8c9"
    : landArea > 3000
    ? "#ccece6"
    : landArea > 1000
    ? "#e5f5f9"
    : "#f7fcfd";
};

export default function ThematicLandArea() {
  const [defaultsOptionsMap] = useState({
    center: [-8.4598, 115.1266],
    zoom: 8.66,
    scrollWheelZoom: false,
  });

  const style = (feature) => {
    const landArea = feature.properties.land_area_ha;
    return {
      fillColor: getColor(landArea),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  // Function to handle mouseover events
  const onEachFeature = (feature, layer) => {
    layer.bindPopup(
      `<b>${feature.properties.name}</b><br>Luas Lahan: ${Math.floor(
        feature.properties.land_area_ha
      )} / ha`
    );
    layer.on({
      mouseover: () => {
        layer.setStyle({ weight: 5 });
      },
      mouseout: () => {
        layer.setStyle(style(feature));
      },
    });
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center">
          Peta Tematik Luas Lahan
        </h1>
      </div>

      <div>
        <MapContainer
          center={defaultsOptionsMap.center}
          zoom={defaultsOptionsMap.zoom}
          scrollWheelZoom={defaultsOptionsMap.scrollWheelZoom}
          className="h-[300px] md:h-[480px] rounded-md z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            data={provincesBali.features}
            attribution="provinsi bali"
            onEachFeature={onEachFeature}
            style={style}
          />
          <Legend />
        </MapContainer>
      </div>
    </div>
  );
}

const Legend = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 255, 255, 0.8)",
        margin: "10px 10px 25px",
        padding: "10px",
      }}
      className="leaflet-bottom leaflet-right"
    >
      <LegendContent />
    </div>
  );
};

const LegendContent = () => {
  const grades = [0, 1000, 3000, 5000, 9000, 1300, 1500, 20000];
  const labels = [];
  let from;
  let to;
  for (let i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];
    labels.push(
      <>
        <i
          style={{
            background: getColor(from + 1),
            height: "1em",
            width: "1em",
            float: "left",
          }}
        ></i>
        <span style={{ margin: "0 0.5em" }}>
          {from}
          {to ? ` - ${to}` : "+"}
        </span>
        <br />
      </>
    );
  }
  return labels;
};
