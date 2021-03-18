import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/box";

const title = "Pencil Box";
const desc = 
  "Self-promoting teaser with custom made pencils and flyer which together form a message to potential employers.";

function Box() {
  return (
    <div className="presentation">
      <Carousel
        title={title}
        description={desc}
        visibleSlides={2}
        images={images}
        titlePadding={40}
      />
    </div>
  );
}

export default Box;