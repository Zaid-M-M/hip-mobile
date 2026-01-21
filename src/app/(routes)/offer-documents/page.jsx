import Offer_docsWrapper from "@/components/offer_documents/Offer_docsWrapper";
import MainLayout from "@/src/layouts/MainLayout";
// import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Offer Documents | Horizon Industrial Parks | Compliance",
  description:
    "Access official offer documents for Horizon Industrial Parks. We focus on good governance and sustainable, Grade A logistics infrastructure across India.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Financialinformation() {
  return (
    <MainLayout>
      <Offer_docsWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
