



import logo from './assets/png/clarity_contract-line.png';
import proof_icon from './assets/png/proof_icon.png';
import ntf_icon from './assets/png/nft_icon.png';
import spport_icon from './assets/png/support_icon.png';
import './App.css';
import './Root.css';

function Hero() {
  return (
    <section className='bg_black z_1 min-vh-100'>


      <div className='container'>
        <div className='row align-items-center py-5 mb-5 justify-content-center'>


          <div className='col-6 col-lg-3'>
            <div className='position-relative'>
              <span className='white_circle'></span>
              <div className='card_box'>
                <img src={logo} alt='logo' />

                <h2 className='fs_20 fw-bold mt-4 ff_space_growtesk text-white'>Smart Contract
                </h2>

                <p className='ff_Space_Grotesk fw-normal fs_16 text_gray max-w-224 mb-0'>Eu faucibus
                  libero leo, malesuada justo, tortor pellentesque quis sit. Dui viverra at odio
                  sodales
                  duis integer rhoncus
                  pulvinar. Commodo massa aliquam.
                </p>
              </div>
            </div>
          </div>
          <div className='col-6 col-lg-3'>

            <div className='position-relative'>
              <span className='white_circle'></span>
              <div className='card_box  '>
                <img src={proof_icon} alt='proof_icon' />
                <h2 className='fs_20 fw-bold mt-4 ff_Space_Grotesk text-white'>Proof
                </h2>
                <p className='text_gray ff_space_growtesk fw-normal fs_16  max-w-224 mb-0'>Nisl, sed morbi
                  porta orci nunc. Curabitur vitae hendrerit justo ultricies quam vitae pellentesque
                  tellus
                  felis.
                  Elementum tortor quis est morbi ullamcorper.
                </p>
              </div>
            </div>
          </div>

          <div className='col-6 col-lg-3'>
            <div className='position-relative'>
              <span className='white_circle'></span>
              <div className='card_box  '>
                <img src={ntf_icon} alt='nft_icon' />
                <h2 className='fs_20 fw-bold mt-4 ff_Space_Grotesk text-white'>NFT solutions
                </h2>
                <p className='ff_Space_Grotesk fw-normal fs_16 text_gray max-w-224 mb-0'>Id nam massa sit
                  ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie
                  adipiscing
                  diam
                  nibh
                  lectus. Magna id nisl quis vestibulum rhoncus.
                </p>
              </div>
            </div>
          </div>
          <div className='col-6 col-lg-3'>
            <div className='position-relative'>
              <span className='white_circle'></span>
              <div className='card_box  '>
                <img src={spport_icon} alt='support_icon' />
                <h2 className='fs_20 fw-bold mt-4 ff_Space_Grotesk text-white'>Support
                </h2>
                <p className='text_gray ff_Space_Grotesk fw-normal fs_16  max-w-224'>
                  Tellus id et fringilla auctor. Ac viverra ullamcorper nec, senectus at nulla. Metus sem
                  egestas
                  volutpat cras phasellus
                  cursus augue sagittis, enim. Sit et cras.
                </p>

              </div>
            </div>
          </div>

        </div>
        
        <div className='card_2'>

          <div className='d-flex align-items-center'>
            <h1 className='text-white fs_39 max-w-217'>NFT Holders</h1>
            <h1 className='text-white fs_47'>70%</h1>

          </div>
          <p className='fs_23  text_gray mb-0 mt-3 max-w-290'
          >NFT Holders will earn $TNAT via p2e mechanism.</p>
        </div>
        </div>









    </section>

  );
}

export default Hero;
