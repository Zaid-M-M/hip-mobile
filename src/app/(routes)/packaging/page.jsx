import PackWrapper from "@/components/packaging/PackWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Packaging Industrial Parks & Warehouse Solutions | Horizon",
  description:
    "Horizon provides Grade A industrial parks for packaging companies and aseptic manufacturing. Scale with sustainable, IGBC-certified infrastructure and logistics.",
};
export default function Ecommerce() {
  return (
    <MainLayout>
      <PackWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
