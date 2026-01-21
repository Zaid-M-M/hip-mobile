import LogiWrapper from "@/components/Logistics/LogiWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Grade A Logistics Parks & Supply Chain Solutions | Horizon",
  description:
    "Scale with Horizon’s Grade A logistics parks and infrastructure. We offer sustainable, IGBC-certified warehousing solutions with seamless connectivity.",
};
export default function Ecommerce() {
  return (
    <MainLayout>
      <LogiWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
