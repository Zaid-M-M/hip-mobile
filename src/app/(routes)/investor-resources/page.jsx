import Resource_docsWrapper from "@/components/investor_resources/resource_docsWrapper";
import MainLayout from "@/src/layouts/MainLayout";
// import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Investor Relations & Resources | Horizon Industrial Parks",
  description:
    "Access investor resources from Horizon, India’s leading industrial and logistics developer. Explore our ESG standards, pan-India portfolio, and growth strategy.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Financialinformation() {
  return (
    <MainLayout>
      <Resource_docsWrapper />
      {/* <Footer /> */}
    </MainLayout>
  );
}
