import Navbar from "@/components/navbar";
import Head from "next/head";
// import { useEffect } from "react";
import Homepage from "@/components/home";
import Playing from "@/components/playing";
import Played from "@/components/played";
import Wishlist from "@/components/wishlist";
import Multiplayer from "@/components/playwithme";
const text = "L.A. Noire is a 2011 action-adventure game developed by Team Bondi and published by Rockstar Games. Set in 1947 Los Angeles, the game follows the rise of detective Cole Phelps among the ranks of the Los Angeles Police Department as he solves a range of cases across various bureaus. When he is tasked with investigating a morphine distribution ring involving several of his former squadmates from World War II, Phelps finds both his personal and professional life falling into turmoil, and reluctantly joins forces with his estranged former comrade, Jack Kelso, as they uncover a major conspiracy involving prominent Los Angeles figures."
export default function Home() {
  // useEffect(() => {
  //   // Check if the user is on a mobile device
  //   const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  //   if (isMobile) {
  //     alert('Please Use a Laptop/Computer for better experience.');
  //   }
  // }, []);
  return (<>
    <Head>
      <title>Imperior Gaming Portfolio</title>
    </Head>
    <Navbar initial={{ opacity: 0, y: 30 }} whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }} viewport={{ once: true }}></Navbar>
    <div className="overflow-hidden">
      <Homepage></Homepage>
      <Playing img={"https://upload.wikimedia.org/wikipedia/en/3/3c/LA-Noire-Box-Art.jpg"} desc={text}></Playing>
      <Played></Played>
      <Wishlist></Wishlist>
      <Multiplayer></Multiplayer>
    </div>
  </>);
}
