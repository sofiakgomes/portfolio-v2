import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/survivalkit";

const title = "Modern Woman Survival Kit";
const desc = "Description"

function SurvivalKit() {
  return (
    <div className="presentation">
      <Carousel
        title={title}
        description={desc}
        images={images}
      />
    </div>
  );
}

export default SurvivalKit;