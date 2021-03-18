import "../css/Home.css";
import { Fragment, useState } from "react";
import ShowcaseItem from "../components/ShowcaseItem";
import Popup from "../components/Popup";
import * as thumbnails from "../assets/thumbnails";

const campaignLink1 = "https://www.campaignlive.com/article/confessions-21-year-old-young-female-consumers-really-want/1675518";
const campaignLink2 = "https://www.campaignlive.com/article/adlands-younger-talent-share-feelings-covid-19-crisis/1678004";
const videoUrl1 = "https://www.youtube.com/embed/WqxZCZFD0BI";
const videoUrl2 = "https://www.youtube.com/embed/xZoCYzmMqsU";


const layout1Col = [
    "ogilvy",
    "posters",
    "survivalkit",
    "table",
    "zine",
    "confessions",
    "ipanema",
    "epoque",
    "box",
    "covid",
];

const layout2Col = [
  [
    "posters",
    "confessions",
    "zine",
    "ipanema",
    "covid",
  ],
  [
    "ogilvy",
    "table",
    "survivalkit",
    "epoque",
    "box",
  ]
];

const layout3Col = [
  [
    "posters",
    "zine",
    "covid",
  ],
  [
    "ogilvy",
    "table",
    "survivalkit",
    "box",
  ],
  [
    "confessions",
    "ipanema",
    "epoque",
  ]
]

function Home(props) {
  const [ video1Open, setVideo1 ] = useState(null);
  const [ video2Open, setVideo2 ] = useState(null);

  const items = {
    box: <ShowcaseItem image={thumbnails.box} caption="Pencil Box" link="/box" />,
    confessions: <ShowcaseItem image={thumbnails.campaign1} caption="Confessions of a 21-year-old" link={campaignLink1} />,
    covid: <ShowcaseItem image={thumbnails.campaign2} caption="COVID-19 Feelings" link={campaignLink2} />,
    epoque: <ShowcaseItem image={thumbnails.epoque} caption="La Belle Epoque" link="/epoque" />,
    ipanema: <ShowcaseItem image={thumbnails.ipanema} caption="Girl That Isn't From Ipanema" onClick={() => setVideo2(true)} />,
    ogilvy: <ShowcaseItem image={thumbnails.ogilvy} />,
    posters: <ShowcaseItem image={thumbnails.bauhaus} caption="Posters" link="/posters" />,
    survivalkit: <ShowcaseItem image={thumbnails.tampon} caption="Modern Woman Survival Kit" link="/survivalkit" />,
    table: <ShowcaseItem image={thumbnails.table} caption="What Do I Bring to the Table?" onClick={() => setVideo1(true)} />,
    zine: <ShowcaseItem image={thumbnails.zine} caption="Zine" link="/zine" />,
  }

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // Check if all items have been added to all layouts once
    console.log("Checking if layouts contain all items...");
    const throwExc = () => { throw "Not all items are included in all layouts"; };
    if (layout1Col.length != Object.keys(items).length) throwExc();
    for (const item in items) if (!layout1Col.includes(item)) throwExc();
    const flat2Col = layout2Col.flat();
    if (flat2Col.length != Object.keys(items).length) throwExc();
    for (const item in items) if (!flat2Col.includes(item)) throwExc();
    const flat3Col = layout3Col.flat();
    if (flat3Col.length != Object.keys(items).length) throwExc();
    for (const item in items) if (!flat3Col.includes(item)) throwExc();
  }

  let columns = <Fragment />;
  if (props.width >= 1400) {
    columns = 
      <Fragment>
        <div className="column">
          { layout3Col[0].map(item => items[item]) }
        </div>
        <div className="column">
          { layout3Col[1].map(item => items[item]) }
        </div>
        <div className="column">
          { layout3Col[2].map(item => items[item]) }
        </div>
      </Fragment>;
  } else if (props.width >= 900) {
    columns = 
      <Fragment>
        <div className="column">
          { layout2Col[0].map(item => items[item]) }
        </div>
        <div className="column">
          { layout2Col[1].map(item => items[item]) }
        </div>
      </Fragment>;
  } else if (props.width > 0) {
    columns = 
      <div className="column">
        { layout1Col.map(item => items[item]) }
      </div>;
  }

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
      {columns}
    </div>
  );
}

export default Home;