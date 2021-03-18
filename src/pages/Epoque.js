import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/epoque";

const title = "La Belle Epoque";
const desc =
  "Developed a new concept for the social media posts of New York City's La Belle Epoque gallery, \
  combining their rare vintage posters and the charming background of West Village.";

function Epoque() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc} images={images} titlePadding={20} />
    </div>
  );
}

export default Epoque;