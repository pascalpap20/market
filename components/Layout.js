import Script from "next/script";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js" />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
