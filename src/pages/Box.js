import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import * as box from "../assets/box";

const title = "Pencil Box";
const desc = "Description"

function Box() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc} visibleSlides={2}>
        <img src={box.i1}/>
        <img src={box.i2}/>
        <img src={box.i3}/>
        <img src={box.i4}/>
      </Carousel>
    </div>
  );
}

export default Box;