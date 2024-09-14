import React from 'react';
import './Marketplace.css';
import Footer from '../Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Marketplace = () => {
  return (
    <div className="marketplace-container">
      <div className="table-market">
        <div className="row">
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc1"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc2"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc3"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
        </div>
        <div className="row">
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc4"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc5"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc6"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc7"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
        </div>
        <div className="row">
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc8"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc9"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
          <div className="item-market">
            <div className="paper-clip" id='turn-right'></div>
            <div className="nft-duc10"></div>
            <div className='nft-name'>#000000</div>
            <div className='nft-price'>100.000VNĐ</div>
          </div>
        </div>
      </div>

     <div className='background-mb'>
     <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc1"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc2"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc3"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc4"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc5"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc6"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc7"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc8"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc9"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-market">
              <div className="paper-clip" id='turn-right'></div>
              <div className="nft-duc10"></div>
              <div className='nft-name'>#000000</div>
              <div className='nft-price'>100.000VNĐ</div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
     </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
