import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/box";

const title = "Pencil Box";
const desc = 
  "Self-promoting teaser with custom made pencils and flyer which together form a message to potential employers.";

function Box(props) {
  let slides = 2;
  if (props.width < 1500) {
    slides = 1;
  }

  return (
    <div className="presentation">
      <Carousel
        title={title}
        description={desc}
        visibleSlides={slides}
        images={images}
        titlePadding={40}
      />
    </div>
  );
}

export default Box;