import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/box";

const title = "Pencil Box";
const desc = "Description"

function Box() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc} visibleSlides={2} images={images}/>
    </div>
  );
}

export default Box;