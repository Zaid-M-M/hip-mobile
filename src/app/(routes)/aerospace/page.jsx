import AroWrapper from "@/components/Arospace/AroWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Aerospace Industrial Parks & Defense Manufacturing | Horizon",
  description:
    "Horizon offers Grade A aerospace industrial parks for defense and high-tech manufacturing. Scale with world-class, sustainable infrastructure and connectivity.",
};

export default function Ecommerce() {
  return (
    <MainLayout>
      <AroWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
