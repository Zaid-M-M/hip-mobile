import EnquireNowButton from "@/components/global/EnquireNowButton";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
