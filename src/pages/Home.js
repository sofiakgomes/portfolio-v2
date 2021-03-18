import "../css/Home.css";
import { useState } from "react";
import ShowcaseItem from "../components/ShowcaseItem";
import Popup from "../components/Popup";
import * as thumbnails from "../assets/thumbnails";

const campaignLink1 = "https://www.campaignlive.com/article/confessions-21-year-old-young-female-consumers-really-want/1675518";
const campaignLink2 = "https://www.campaignlive.com/article/adlands-younger-talent-share-feelings-covid-19-crisis/1678004";
const videoUrl1 = "https://www.youtube.com/embed/WqxZCZFD0BI";
const videoUrl2 = "https://www.youtube.com/embed/xZoCYzmMqsU";

function Home() {
  const [ video1Open, setVideo1 ] = useState(null);
  const [ video2Open, setVideo2 ] = useState(null);

  return (
    <div className="showcase">
      <Popup
        isOpen={video1Open}
        close={() => setVideo1(false)}
        url={videoUrl1}
      />
      <Popup
        isOpen={video2Open}
        close={() => setVideo2(false)}
        url={videoUrl2}
      />
      <div className="column">
        <ShowcaseItem image={thumbnails.bauhaus} caption="Posters" link="/posters" />
        <ShowcaseItem image={thumbnails.zine} caption="Zine" link="/zine" />
        <ShowcaseItem image={thumbnails.campaign2} caption="COVID-19 Feelings" link={campaignLink2} />
      </div>
      <div className="column">
        <ShowcaseItem image={thumbnails.ogilvy} />
        <ShowcaseItem image={thumbnails.table} caption="What Do I Bring to the Table?" onClick={() => setVideo1(true)} />
        <ShowcaseItem image={thumbnails.tampon} caption="Modern Woman Survival Kit" link="/survivalkit" />
        <ShowcaseItem image={thumbnails.box} caption="Pencil Box" link="/box" />
      </div>
      <div className="column">
        <ShowcaseItem image={thumbnails.campaign1} caption="Confessions of a 21-year-old" link={campaignLink1} />
        <ShowcaseItem image={thumbnails.ipanema} caption="Girl That Isn't From Ipanema" onClick={() => setVideo2(true)} />
        <ShowcaseItem image={thumbnails.epoque} caption="La Belle Epoque" link="/epoque" />
      </div>
    </div>
  );
}

export default Home;