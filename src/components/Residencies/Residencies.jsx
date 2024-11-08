import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from '../../utils/slider.json';
import { sliderSetting } from '../../utils/comman';

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        {/* Header Section */}
        <div className="r-head flexColStart">
          <span className="orangeText">Best choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* Swiper Carousel */}
        <Swiper {...sliderSetting}>
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">
                {/* Card Image */}
                <img src={card.image} alt={card.name} />

                {/* Card Details */}
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
