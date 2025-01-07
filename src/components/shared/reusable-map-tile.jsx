import PropTypes from "prop-types";
import { TileLayer } from "react-leaflet";

export default function ReusableMapTile({ attribution, url }) {
  return <TileLayer attribution={attribution} url={url} />;
}

ReusableMapTile.propTypes = {
  attribution: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
