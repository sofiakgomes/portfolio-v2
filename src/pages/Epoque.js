import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/epoque";

const title = "La Belle Epoque";
const desc = "A new concept for a gallery's social media posts using the beauty of the streets of West Village."

function Epoque() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc} images={images} />
    </div>
  );
}

export default Epoque;