import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import images from "../assets/zine";

const title = "Zine";
const desc =
  "Zine celebrating Brazilian writer Fernando Pessoa, illustrated with collages of pictures \
  by Brazilian photographer Sebastião Salgado. Printing and craftsmanship were hand made by me, \
  using a mix of pink cover paper and vellum to incorporate transparency and connect the images across pages.";

function Zine(props) {
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

export default Zine;