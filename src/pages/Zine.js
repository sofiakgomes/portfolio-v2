import "../css/Presentation.css";
import Carousel from "../components/Carousel";
import * as zine from "../assets/zine";

const title = "Zine";
const desc = "Description"

function Zine() {
  return (
    <div className="presentation">
      <Carousel title={title} description={desc} visibleSlides={2}>
        <img src={zine.i1}/>
        <img src={zine.i2}/>
        <img src={zine.i3}/>
        <img src={zine.i4}/>
        <img src={zine.i5}/>
        <img src={zine.i6}/>
        <img src={zine.i7}/>
        <img src={zine.i8}/>
        <img src={zine.i9}/>
        <img src={zine.i10}/>
        <img src={zine.i11}/>
        <img src={zine.i12}/>
        <img src={zine.i13}/>
        <img src={zine.i14}/>
        <img src={zine.i15}/>
        <img src={zine.i16}/>
        <img src={zine.i17}/>
        <img src={zine.i18}/>
      </Carousel>
    </div>
  );
}

export default Zine;