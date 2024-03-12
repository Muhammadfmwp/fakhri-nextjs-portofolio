import Image from "next/image";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Lists from "@/components/Lists";

export default function Home() {
  return (
    <main>
      <head>
        <title>Fakhri App</title>
      </head>
      <body>
        <Header></Header>
        <Features></Features>
        <Lists></Lists>
        <Footer></Footer>
      </body>
    </main>
  );
}
