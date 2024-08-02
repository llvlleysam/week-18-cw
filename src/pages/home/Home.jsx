import Modal from "../../components/Common/Modal/Modal";
import Footer from "../../components/Sections/Footer";
import Header from "../../components/Sections/Header";
import SideLeft from "../../components/Sections/SideLeft";
import SideRight from "../../components/Sections/SideRight";

export default function Home() {
  return (
    <div className="">
        <Modal/>
        <Header/>
        <div className="grid grid-cols-4 p-4 gap-8">
        <SideLeft/>
        <SideRight/>
        </div>
        <Footer/>
    </div>
  )
}
