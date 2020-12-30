import MainLayout from "components/layout/MainLayout";
import HeroBanner from "components/common/hero-banner/HeroBanner";
import bannerSrc from "assets/hero-bg.jpg";

function App() {
  return (
    <MainLayout>
      <HeroBanner src={bannerSrc} alt="Halcyon Days">
        <h1>
          Halcyon<span>Days</span>
        </h1>
        <p>React/SASS website template</p>
      </HeroBanner>
      <section className="container bg-grey-600 text-center">
        <div className="contained">
          <h2>A creative portfolio template</h2>
          <p>
            Sed a lorem quis neque interdum consequat ut sed sem. Duis quis
            tempor nunc. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta
            fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget
            bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default App;
