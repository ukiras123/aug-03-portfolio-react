import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "60vh",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
