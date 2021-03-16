import "../css/Carousel.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot
} from 'pure-react-carousel';

function Carousel(props) {

  return (
    <CarouselProvider
      visibleSlides={props.visibleSlides || 3}
      totalSlides={props.children.length + 1}
      isIntrinsicHeight={true}
    >
      <div className="carousel-container">
        <Slider>
          <Slide index={0}>
            <div className="carousel-title">
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </div>
          </Slide>
          {props.children.map((child, i) => (
            <Slide index={i+1}>
              <div className="slide">
                {child}
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="button button-back">
          <div class="material-icons md-48">arrow_back_ios</div>
        </ButtonBack>
        <ButtonNext className="button button-next">
          <div class="material-icons md-48">arrow_forward_ios</div>
        </ButtonNext>
      </div>
      <div className="dot-group">
      <Dot slide={0}>&bull;</Dot>
      {props.children.map((child, i) => (
        <Dot slide={i+1}>&bull;</Dot>
      ))}
      </div>
    </CarouselProvider>
  );
}

export default Carousel;