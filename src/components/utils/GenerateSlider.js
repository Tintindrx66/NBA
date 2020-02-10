import React from "react";
import Slider from "react-slick";

const settings = {
  arrow: false,
  dot: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const GenerateSlider = ({ slides }) =>
  slides ? (
    <Slider {...settings}>
      {slides.map(item => (
        <div key={item.id}>
          <div
            className="item_slider"
            style={{ background: `url(/images/covers/${item.cover})` }}
          >
            <div className="caption">
              <h4>{item.tpoic}</h4>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  ) : null;
export default GenerateSlider;
