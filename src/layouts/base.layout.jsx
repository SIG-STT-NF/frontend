import PropTypes from "prop-types";

// Configure leaflet css
import "leaflet/dist/leaflet.css";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-4">{children}</main>
      <Footer />
    </>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node,
};
