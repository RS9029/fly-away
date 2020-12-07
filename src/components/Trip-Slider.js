import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar} from 'swiper';
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar]);



function Slider(){
    
    
    return(

        <Swiper
        className = "slider-container"
        spaceBetween={75}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation
        pagination={{ clickable: true }}
        loop = {{loop:true}}
        breakpoints = {{
            0:{
                slidesPerView: 1,
                slidesPerGroup:1,
            },
            830:{
                slidesPerView: 2,
                slidesPerGroup:2,
            },
            1025:{
                slidesPerView: 3,
                slidesPerGroup:3,
            },
            1740:{
                slidesPerView: 4,
                slidesPerGroup:4,
            }
        }}
    >
      <SwiperSlide className = "slide">
        <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className = "slide">
        <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className = "slide">
      <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className = "slide">
        <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className = "slide">
        <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className = "slide">
        <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className = "slide">
        <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className = "slide">
        <div id = "greece" className = "top-card-img"></div>
        <div className = "card-info">
            <div className = "card-title-section">
                <h1 className = "card-title">Greece</h1>
                <svg  className = "like-button" xmlns="http://www.w3.org/2000/svg" width="52.005" height="43.005" viewBox="0 0 52.005 43.005">
                    <path className = "like-button-inner" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M42.437,4.846C37.407.885,29.925,1.6,25.308,6L23.5,7.721,21.691,6C17.083,1.6,9.593.885,4.562,4.846A11.558,11.558,0,0,0,3.654,22.48L21.416,39.427a3.044,3.044,0,0,0,4.158,0L43.337,22.48a11.552,11.552,0,0,0-.9-17.634Z" transform="translate(2.503 0.257)" fill="none" stroke="#000" strokeWidth="5" opacity="1"/>
                </svg>
            </div>
            <h2>Departing From Toronto</h2>
            <div className ="card-subinfo">
                <p>For flights as soon as: Nov 10, 2020</p>
                <div className = "pricing-info">
                    <h3>Starting At:</h3>
                    <span className = "price">$699.99</span>
                </div>
            </div>
            <div className = "button-container"><button className = "book-button">Book Now</button></div>
        </div>
      </SwiperSlide>
    </Swiper>
    )
}

export default Slider;