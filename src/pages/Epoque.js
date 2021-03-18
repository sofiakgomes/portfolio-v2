import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/epoque";

const title = "La Belle Epoque";
const desc =
  "Developed a new concept for the social media posts of New York City's La Belle Epoque gallery, \
  combining their rare vintage posters and the charming background of West Village.";

function Epoque(props) {
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

export default Epoque;