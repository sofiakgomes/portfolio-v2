import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/posters";

const title = "Bauhaus Posters";
const desc = "Description"

function Posters() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc} images={images} />
    </div>
  );
}

export default Posters;