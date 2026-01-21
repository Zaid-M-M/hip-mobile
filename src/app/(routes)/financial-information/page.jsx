import Financial_infoWrapper from "@/components/financial_information/financial_infoWrapper";
// import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Financial Information | Horizon Industrial Parks",
  description:
    "Access financial data for Horizon, India’s largest pure-play logistics platform. We manage 60 million sq ft with a focus on good governance and sustainable growt",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Financialinformation() {
  return (
    <>
      <Financial_infoWrapper />
      {/* <Footer /> */}
    </>
  );
}
