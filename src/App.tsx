import { Accordion } from "components/accordion/Accordion";
import { Card } from "components/card/Card";
import { LiquidButton } from "components/buttons/liquidButton/LiquidButton";
import { Login } from "components/login/Login";
import { ToggleSwitch } from "components/toggleSwitch/ToggleSwitch";
import { MediaPlayer } from "components/mediaPlayer/MediaPlayer";
import Sidebar from "components/sidebar/Sidebar";
import { Carousel } from "components/carousel/Carousel";

function App() {
  return (
    <>
      <Login />
      <Accordion />
      <Card />
      <LiquidButton />
      <ToggleSwitch />
      <MediaPlayer />
      <Sidebar />
      <Carousel />
    </>
  );
}

export default App;
