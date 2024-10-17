import Head from "next/head";
import Header from "./components/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import StatisticsSection from "./sections/StatisticsSection/StatisticsSection";
import Footer from "./components/Footer/Footer";
import AboutSection from "./sections/AboutSection/AboutSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tempo de Alegria</title>
      </Head>
      <Header />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <StatisticsSection />

      <Footer />
    </>
  );
}
