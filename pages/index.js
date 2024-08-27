import Navbar from "@/components/navbar";
import { useEffect } from "react";
import Homepage from "@/components/home";
import Playing from "@/components/playing";
import Played from "@/components/played";
import Wishlist from "@/components/wishlist";
import Multiplayer from "@/components/playwithme";
const text="Grand Theft Auto IV is a 2008 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series, following 2004's Grand Theft Auto: San Andreas, and the eleventh entry overall. Set in the fictional Liberty City, based on New York City, the single-player story follows Eastern European war veteran Niko Bellic and his attempts to escape his past while under pressure from high-profile criminals. The open world design lets players freely roam Liberty City, consisting of three main islands, and the neighbouring state of Alderney, which is based on New Jersey.The game is played from a third-person perspective and its world is navigated on foot and by vehicle. Throughout the single-player mode, players control Niko Bellic. An online multiplayer mode is also included with the game, allowing up to 32 players to engage in both cooperative and competitive gameplay in a recreation of the single-player setting.[b] Two expansion packs were later released for the game, The Lost and Damned and The Ballad of Gay Tony, which both feature new plots that are interconnected with the main Grand Theft Auto IV storyline, and follow new protagonists."
export default function Home() {
  useEffect(() => {
    // Check if the user is on a mobile device
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

    if (isMobile) {
      alert('This website is not optimised for Viewing in Android Devices.Please Use a Laptop/Computer for accessing this Website. We are Sorry for your inconvenience');
    }
  }, []);
  return (<>
  <Navbar initial={{opacity:0,y:30}} whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1
        }}} viewport={{once:true}}></Navbar>
  <div className="overflow-hidden">
  <Homepage></Homepage>
  <Playing img={"https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Grand_Theft_Auto_IV_cover.jpg/220px-Grand_Theft_Auto_IV_cover.jpg"} desc={text}></Playing>
  <Played></Played>
  <Wishlist></Wishlist>
  <Multiplayer></Multiplayer>
  </div>
  </>);
}
