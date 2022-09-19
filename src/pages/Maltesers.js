import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/maltesers";

const title = "Maltesers: Now in the U.S.";
const desc =
    "Art Direction & Copy: Sofia Gomes"

function Maltesers(props) {
  let slides = 3;
  if (props.width < 1100) {
    slides = 1;
  } else if (props.width < 1600) {
    slides = 2;
  }

  return (
    <div className="presentation">
      <Carousel
        title={title}
        description={desc}
        visibleSlides={slides}
        images={images}
        titlePadding={20}
      />
    </div>
  );
}

export default Maltesers;