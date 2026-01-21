import RenWrapper from "@/components/Renewable/RenWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Renewable Energy Industrial Parks & Solar Warehousing | Horizon",
  description:
    "Horizon offers Grade A clean energy business parks and solar warehouses. Scale with power-ready industrial facilities and sustainable, IGBC-certified infrastructure.",
};

export default function Ecommerce() {
  return (
    <MainLayout>
      <RenWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
