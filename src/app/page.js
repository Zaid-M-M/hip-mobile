import HomeWrapper from "@/components/home/HomeWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";
import HeroBanner from "@/components/home/Hero/HeroBanner";
import HomeWrapperServer from "@/components/home/HomeWrapperServer";

export const metadata = {
  title: "Industrial and logistics parks in India - Horizon Industrial Parks",
  description:
    "Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India",
};

export default function Home() {
  return (
    <>
      <HomeWrapperServer />
    </>
  );
}
