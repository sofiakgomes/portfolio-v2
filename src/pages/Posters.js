import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/posters";

const title = "Posters";
const desc = 
  "Collection of posters featuring: Mock MOMA exhibit celebrating the 100th anniversary of the Bauhaus movement, \
  Pulp Fiction by Quentin Tarantino, Monty Python and the Holy Grail and Taxi Driver by Martin Scorsese.";

function Posters(props) {
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
      />
    </div>
  );
}

export default Posters;