import FmcgWrapper from "@/components/Fmcg/FmcgWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "FMCG Warehousing & Retail Distribution Centers | Horizon",
  description:
    "Horizon provides Grade A FMCG warehousing and retail distribution centers. Scale with top-notch hygiene standards and sustainable, IGBC-certified infrastructure.",
};

export default function Ecommerce() {
  return (
    <MainLayout>
      <FmcgWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
