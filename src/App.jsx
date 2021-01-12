import { FaLaptop, FaCode, FaHeart } from "react-icons/fa";
import MainLayout from "components/layout/MainLayout";
import HeroBanner from "components/common/hero-banner/HeroBanner";
import Section from "components/common/section/Section";
import SectionWidthBackground from "components/common/section-with-background/SectionWidthBackground";
import ScrollArrow from "components/common/scroll-arrow/ScrollArrow";
import bannerSrc from "assets/hero-bg.jpg";
import iphoneSrc from "assets/iphone-bg.png";
import plantsBgSrc from "assets/plants-bg.jpg";
import portfolio1Src from "assets/portfolio-01.jpg";
import portfolio2Src from "assets/portfolio-02.jpg";
import portfolio3Src from "assets/portfolio-03.jpg";

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
      <Section isFluid={true} isPadded={false}>
        <div className="col-2 gap-0">
          <div className="offest-section-image-right bg-grey-100">
            <img src={iphoneSrc} alt="iPhone" loading="lazy" />
          </div>
          <div>
            <Section title="Responsive Design Spedialists">
              <div className="p-60">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ultricies nulla non metus pulvinar imperdiet. Praesent non
                  adipiscing libero.
                </p>
                <p>
                  Mauris ultrices odio vitae nulla ultrices iaculis. Nulla
                  rhoncus odio eu lectus faucibus facilisis. Maecenas ornare
                  augue vitae sollicitudin accumsan.
                </p>
                <p>
                  Etiam eget libero et erat eleifend consectetur a nec lectus.
                  Sed id tellus lorem. Suspendisse sed venenatis odio, quis
                  lobortis eros.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </Section>
      <SectionWidthBackground imageSrc={plantsBgSrc} isBgFixed={true}>
        <h2 className="text-uppercase mb-10">I got 99 problems</h2>
        <h3 className="text-uppercase">But design 'aint one</h3>
        <ScrollArrow className="center" />
      </SectionWidthBackground>
      <Section>
        <div className="col-3">
          <div>
            <img
              src={portfolio1Src}
              alt="Porfolio 1"
              className="img-fluid mb-25"
              loading="lazy"
            />
            <Section title="Creative Minds" isPadded={false}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultricies nulla non metus pulvinar imperdiet. Praesent non
                adipiscing libero.
              </p>
            </Section>
          </div>
          <div>
            <img
              src={portfolio2Src}
              alt="Porfolio 2"
              className="img-fluid mb-25"
              loading="lazy"
            />
            <Section title="Creative Hearts" isPadded={false}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultricies nulla non metus pulvinar imperdiet. Praesent non
                adipiscing libero.
              </p>
            </Section>
          </div>
          <div>
            <img
              src={portfolio3Src}
              alt="Porfolio 3"
              className="img-fluid mb-25"
              loading="lazy"
            />
            <Section title="Creative Ideas" isPadded={false}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultricies nulla non metus pulvinar imperdiet. Praesent non
                adipiscing libero.
              </p>
            </Section>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}

export default App;
