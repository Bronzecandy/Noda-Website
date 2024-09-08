import React from 'react';
import './Marketplace.css';
import Footer from '../Footer/Footer';

const Marketplace = () => {
  return (
    <div className="marketplace-container">
      <h1>Marketplace Page</h1>
      
      <div className="table-market">
        <div className="row">
          <div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc1"></div>
          </div>
          <div className="item-market">
             <div className="paper-clip" id='turn-right'></div>
             <div className="nft-duc2"></div>
          </div><div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc3"></div>
          </div>
        </div>
        <div className="row">
        <div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc4"></div>
          </div><div className="item-market">
             <div className="paper-clip" id='turn-right'></div>
             <div className="nft-duc5"></div>
          </div><div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc6"></div>
          </div><div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc7"></div>
          </div>
        </div>
        <div className="row">
        <div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc8"></div>
          </div><div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc9" id='turn-right'></div>
          </div><div className="item-market">
             <div className="paper-clip"></div>
             <div className="nft-duc10"></div>
          </div>
        </div>
      </div>
      <div className='content-mobile'>
  <div className='row-mobile'>
    <div className='scroll'>
         <div className="nft-duc1-mb"></div>
    </div>
    <div className='scroll3'>
    <div className="nft-duc2-mb"></div>
    </div>
  </div>
  <div className='row-mobile'>
    <div className='scroll1'>
    <div className="nft-duc3-mb"></div>
    </div>
    <div className='scroll2'>
    <div className="nft-duc4-mb"></div>
    </div>
  </div>
  <div className='row-mobile'>
    <div className='scroll'>
    <div className="nft-duc4-mb"></div>
    </div>
    <div className='scroll3'>
    <div className="nft-duc6-mb"></div>
    </div>
  </div>
  <div className='row-mobile'>
    <div className='scroll2'>
    <div className="nft-duc7-mb"></div>
    </div>
    <div className='scroll'>
    <div className="nft-duc8-mb"></div>
    </div>
  </div>
  <div className='row-mobile'>
    <div className='scroll'>
    <div className="nft-duc9-mb"></div>
    </div>
    <div className='scroll1'>
    <div className="nft-duc10-mb"></div>
    </div>
  </div>
</div>

      
      
      <Footer />
    </div>
  );
};

export default Marketplace;
