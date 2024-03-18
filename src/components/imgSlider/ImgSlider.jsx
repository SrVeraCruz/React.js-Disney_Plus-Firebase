import "./imgSlide.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <div className="imgSlide">
      <Slider {...settings} className="carrousel">
        <div className="wrap">
          <a href="#">
            <img src="/images/slider-badging.jpg" alt="slider" />
          </a>
        </div>
        <div className="wrap">
          <a href="#">
            <img src="/images/slider-badag.jpg" alt="slider" />
          </a>
        </div>
        <div className="wrap">
          <a href="#">
            <img src="/images/slider-scales.jpg" alt="slider" />
          </a>
        </div>
        <div className="wrap">
          <a href="#">
            <img src="/images/slider-scale.jpg" alt="slider" />
          </a>
        </div>
      </Slider>
    </div>
  )
}

export default ImgSlider
