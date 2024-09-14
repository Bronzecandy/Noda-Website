import React from 'react';
import './Marketplace.css';
import Footer from '../Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

const Marketplace = () => {
  return (
    <div className="marketplace-container">
      {/* Phần table-market chứa các sản phẩm theo hàng */}
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

      {/* Phần Swiper với hiệu ứng fade */}
      <div className='background-mb'>
        <div className="container">
          <Swiper
            effect={'fade'}  // Đổi hiệu ứng thành fade
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            fadeEffect={{ crossFade: true }}  // Cấu hình hiệu ứng fade
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectFade, Pagination, Navigation]}  // Thêm module fade
            className="swiper_container"
          >
            {/* Các slide với hình ảnh sản phẩm */}
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
