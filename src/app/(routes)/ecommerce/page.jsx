import EcomWrapper from "@/components/ecommerce/EcomWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "E-commerce Warehousing & Fulfillment Centers | Horizon",
  description:
    "Horizon offers Grade A e-commerce warehousing, fulfillment centers, and dark stores. Scale your business with sustainable, IGBC-certified logistics infrastructure.",
};

export default function Ecommerce() {
  return (
    <MainLayout>
      <EcomWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
