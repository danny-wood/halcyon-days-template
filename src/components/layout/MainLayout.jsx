import Header from "components/global/header/Header";
import Footer from "components/global/footer/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
