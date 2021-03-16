import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import * as epoque from "../assets/epoque";

const title = "La Belle Epoque";
const desc = "A new concept for a gallery's social media posts using the beauty of the streets of West Village."

function Epoque() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc}>
        <img src={epoque.i1}/>
        <img src={epoque.i2}/>
        <img src={epoque.i3}/>
        <img src={epoque.i4}/>
        <img src={epoque.i5}/>
        <img src={epoque.i6}/>
        <img src={epoque.i7}/>
        <img src={epoque.i8}/>
      </Carousel>
    </div>
  );
}

export default Epoque;