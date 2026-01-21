import ChmWrapper from "@/components/Chemical/chmWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Chemical Industrial Park & Warehousing Solutions | Horizon",
  description:
    "Horizon provides Grade A chemical industrial parks and storage warehousing with strict safety compliance. Scale with sustainable, IGBC-certified infrastructure.",
};
export default function Ecommerce() {
  return (
    <MainLayout>
      <ChmWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
