import Header from "~/components/Layout/components/Header";

import Footer from "~/components/Layout/components/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
