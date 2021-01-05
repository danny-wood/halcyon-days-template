import { FaLaptop, FaCode, FaHeart } from "react-icons/fa";
import MainLayout from "components/layout/MainLayout";
import HeroBanner from "components/common/hero-banner/HeroBanner";
import bannerSrc from "assets/hero-bg.jpg";
import Section from "./components/common/section/Section";

function App() {
  return (
    <MainLayout>
      <HeroBanner src={bannerSrc} alt="Halcyon Days">
        <h1>
          Halcyon<span>Days</span>
        </h1>
        <p>React/SASS website template</p>
      </HeroBanner>
      <Section title="A creative portfolio template" className="bg-grey-100">
        <p>
          Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor
          nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed
          eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel
          volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </Section>
      <Section title="Love what you do, and you'll do it well">
        <div className="col-3">
          <div>
            <div className="primary-circle center mb-25 mt-10 shadow">
              <FaLaptop />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              lorem quis neque interdum consequat ut sed sem. Duis quis tempor
              nunc. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
          </div>
          <div>
            <div className="primary-circle center mb-25 mt-10">
              <FaCode />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              lorem quis neque interdum consequat ut sed sem. Duis quis tempor
              nunc. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
          </div>
          <div>
            <div className="primary-circle center mb-25 mt-10">
              <FaHeart />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              lorem quis neque interdum consequat ut sed sem. Duis quis tempor
              nunc. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}

export default App;
