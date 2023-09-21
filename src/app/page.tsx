import Image from "next/image";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <div className="flex items-center justify-center">
        <button className="btn">Filters</button>
        <button className="btn">1 🛒</button>
      </div>
      <div className="divider"></div>
      <div className="flex items-center justify-center">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex items-center justify-center">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}
