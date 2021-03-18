import "../css/Presentation.css";
import { useEffect } from "react";
import Carousel from "../components/Carousel";
import { images, i7, i8, video } from "../assets/survivalkit";

const title = "Modern Woman Survival Kit";
const desc =
  "As a woman, I've always felt that we need to learn how to celebrate \
  our gender, while also bringing awareness and breaking barriers. That's \
  why I created a Modern Woman Survival Kit.";

function SurvivalKit(props) {

  useEffect(() => window.scrollTo(0, 0), []);

  let slides = 4;
  if (props.width < 900) {
    slides = 1;
  } else if (props.width < 1200) {
    slides = 2;
  } else if (props.width < 1500) {
    slides = 3;
  }

  return (
    <div className="presentation">
      <Carousel
        title={title}
        description={desc}
        images={images}
        visibleSlides={slides}
        titlePadding={30}
        maxHeight="550px"
        titleSize="4em"
      />
      <video className="presentation-extra" controls>
        <source src={video} type="video/mp4" />
      </video>
      <p className="presentation-text">
        With the word "celebration" in mind, I created a box / purse in the shape of a tampon. 
        Women often feel ashamed of their periods, and the subject itself is still an enormous 
        taboo in our society. Therefore, I wanted to celebrate such an important aspect of womanhood.
      </p>
      <img className="presentation-extra" src={i7} />
      <p className="presentation-text">
        The strip below wraps around the tampon and contains an infographic printed on its inside 
        explaining the items contained and the reason why they are relevant to the well-being of a 
        modern woman. Additionally, it features an introductory message:
      </p>
      <p className="presentation-text">
        What do 21st century women need? Besides respect, equality and admiration. They need to not 
        be disturbed by any obstacles in their mission to take over the entire world. This kit is a 
        helping hand to all females who have no time to waste and always need to be reminded that 
        they are powerful, awesome human beings. After all, us ladies must thrive to survive.
      </p>
      <img className="presentation-extra" src={i8} />
    </div>
  );
}

export default SurvivalKit;