import "../css/Carousel.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  Image,
  ImageWithZoom
} from 'pure-react-carousel';

function Carousel(props) {

  return (
    <CarouselProvider
      visibleSlides={props.visibleSlides || 3}
      totalSlides={props.images.length + 1}
      isIntrinsicHeight={true}
    >
      <div className="carousel-container">
        <Slider>
          <Slide index={0}>
            <div
              className="carousel-title"
              style={{
                maxHeight: props.maxHeight,
                paddingRight: props.titlePadding
              }
            }>
              <h1
                style={props.titleSize ? { fontSize: props.titleSize } : {}}
              >
                  {props.title.toUpperCase()}
              </h1>
              <p>{props.description}</p>
            </div>
          </Slide>
          {props.images.map((image, i) => (
            <Slide index={i+1}>
              <div className="slide">
                <Image src={image} style={{ maxHeight: props.maxHeight }} />
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
        {props.images.map((_, i) => (
          <Dot slide={i+1}>&bull;</Dot>
        ))}
      </div>
    </CarouselProvider>
  );
}

export default Carousel;