import PropTypes from "prop-types";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node,
};
