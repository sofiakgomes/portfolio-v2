import "../css/Home.css";
import { Fragment, useState } from "react";
import ShowcaseItem from "../components/ShowcaseItem";
import Popup from "../components/Popup";
import * as thumbnails from "../assets/thumbnails";

const duolingoUrl = "https://www.youtube.com/embed/-ewT2pfvADQ";


const layout1Col = [
    "duolingo",
    "oreo",
    "maltesers",
    "crayola",
];

const layout2Col = [
  [
    "duolingo",
    "maltesers",
  ],
  [
    "oreo",
    "crayola",
  ]
];

// const layout3Col = [
//   [
//     "oreo",
//     "crayola",
//     "posters",
//     "zine",
//     "covid",
//   ],
//   [
//     "duolingo",
//     "box",
//   ],
//   [
//     "maltesers",
//     "confessions",
//     "epoque",
//   ]
// ]

function Home(props) {
  const [ duolingoOpen, setDuolingo ] = useState(null);

  const items = {
    duolingo: <ShowcaseItem image={thumbnails.duolingo} caption="Duolingo SkyMiles" onClick={() => setDuolingo(true)} />,
    oreo: <ShowcaseItem image={thumbnails.oreo} caption="Build Your Oreo" link="/oreo" />,
    maltesers: <ShowcaseItem image={thumbnails.maltesers} caption="Maltesers: Now in the U.S." link="/maltesers" />,
    crayola: <ShowcaseItem image={thumbnails.crayola} caption="Crayola" link="/crayola" />,
  }

  // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  //   // Check if all items have been added to all layouts once
  //   console.log("Checking if layouts contain all items...");
  //   const throwExc = () => { throw "Not all items are included in all layouts"; };
  //   if (layout1Col.length != Object.keys(items).length) throwExc();
  //   for (const item in items) if (!layout1Col.includes(item)) throwExc();
  //   const flat2Col = layout2Col.flat();
  //   if (flat2Col.length != Object.keys(items).length) throwExc();
  //   for (const item in items) if (!flat2Col.includes(item)) throwExc();
  //   const flat3Col = layout3Col.flat();
  //   if (flat3Col.length != Object.keys(items).length) throwExc();
  //   for (const item in items) if (!flat3Col.includes(item)) throwExc();
  // }

  let columns = <Fragment />;
  /* if (props.width >= 1400) {
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
  } else */ if (props.width >= 900) {
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
        isOpen={duolingoOpen}
        close={() => setDuolingo(false)}
        url={duolingoUrl}
      />
      {columns}
    </div>
  );
}

export default Home;