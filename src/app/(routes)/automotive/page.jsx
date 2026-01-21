import AutoWrapper from "@/components/Automotive/AutoWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Automotive Manufacturing & Logistics Solutions | Horizon",
  description:
    "Horizon provides Grade A industrial parks for auto component manufacturing and logistics solutions. Scale with sustainable infrastructure and seamless connectivity.",
};
export default function Ecommerce() {
  return (
    <MainLayout>
      <AutoWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
