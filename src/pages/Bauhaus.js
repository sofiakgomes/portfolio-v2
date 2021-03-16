import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import * as bauhaus from "../assets/bauhaus";

const title = "Bauhaus Posters";
const desc = "Description"

function Bauhaus() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc}>
        <img src={bauhaus.i1}/>
        <img src={bauhaus.i2}/>
        <img src={bauhaus.i3}/>
      </Carousel>
    </div>
  );
}

export default Bauhaus;