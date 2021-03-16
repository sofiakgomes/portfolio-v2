import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/zine";

const title = "Zine";
const desc = "Description"

function Zine() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc} visibleSlides={2} images={images} />
    </div>
  );
}

export default Zine;