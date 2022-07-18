import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      {/* <!-- Core JS --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/jquery/jquery.min.js" />
      {/* <!-- jquery JS (https://jquery.com) --> */}

      {/* <!-- Libs and Plugins JS --> */}
      {/* <!-- GSAP JS (https://greensock.com/gsap/) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/gsap/gsap.min.js" />
      {/* <!-- GSAP ScrollToPlugin JS (https://greensock.com/scrolltoplugin/) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/gsap/ScrollToPlugin.min.js" />
      {/* <!-- GSAP ScrollTrigger JS (https://greensock.com/scrolltrigger/) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/gsap/ScrollTrigger.min.js" />

      {/* <!-- Smooth Scrollbar JS (https://github.com/idiotWu/smooth-scrollbar/) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/smooth-scrollbar.js" />
      {/* <!-- Swiper JS (https://swiperjs.com/) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/swiper/js/swiper-bundle.min.js" />
      {/* <!-- imagesloaded JS (more info: https://imagesloaded.desandro.com/) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/isotope/imagesloaded.pkgd.min.js" />
      {/* <!-- Isotope JS (http://isotope.metafizzy.co) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/isotope/isotope.pkgd.min.js" />
      {/* <!-- Isotope Packery Mode JS (https://isotope.metafizzy.co/layout-modes/packery.html) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/isotope/packery-mode.pkgd.min.js" />
      {/* <!-- lightGallery Plugins JS (http://sachinchoolur.github.io/lightGallery) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/lightgallery/js/lightgallery-all.min.js" />
      {/* <!-- A jQuery plugin that adds cross browser mouse wheel support (https://github.com/jquery/jquery-mousewheel) --> */}
      <Script strategy="lazyOnload" src="/assets/vendor/jquery.mousewheel.min.js" />

      {/* <!-- Theme master JS --> */}
      <Script strategy="lazyOnload" src="/assets/js/theme.js" />

      <div className="tt-transition tt-boxed tt-smooth-scroll tt-magic-cursor">
        <main id="body-inner">
          <div id="page-transition">
            <div className="ptr-overlay"></div>
            <div className="ptr-preloader">
              <div className="ptr-prel-content">
                <img
                  src="assets/img/logo-light.png"
                  className="ptr-prel-image tt-logo-light"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          <div id="magic-cursor">
            <div id="ball"></div>
          </div>

          <div className="bg-noise"></div>

          <div id="scroll-container">
            <div id="content-wrap">
              <div id="page-header" className="ph-full ph-inline ph-bg-image ph-image-shadow ph-image-cover-5 ph-content-parallax">
                <div className="page-header-inner tt-wrap">
                  <div className="ph-image">
                    <div className="ph-image-inner">
                      <img src="assets/img/page-header/project-ph/lilian-empty-space.jpg" alt="Image" />
                    </div>
                  </div>
                  <div className="ph-caption">
                    <div className="ph-categories ph-appear">
                      <div className="ph-category" >Diving soon!</div>
                    </div>

                    <h2 className="ph-caption-title ph-appear">Salt<br className="hide-from-lg" />& Sun</h2>
                    <br className="hide-from-lg" />  
                  </div> 
                </div> 
                <a href="#page-content" className="scroll-down-circle" data-offset="30">
                  <div className="sdc-inner ph-appear">
                    <div className="sdc-icon"><i className="fas fa-chevron-down"></i></div>
                    <svg viewBox="0 0 500 500">
                      <defs>
                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
                      </defs>
                      <text dy="30">
                        <textPath xlinkHref="#textcircle">Scroll down - Scroll down -</textPath>
                      </text>
                    </svg>
                  </div>
                </a>
              </div>
              
            <div id="page-content">
              <div className="tt-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">
                <div className="tt-section-inner tt-wrap">

                  <div className="tt-row">
                    <div className="tt-col-lg-4 padding-right-md-5-p">
                      <div className="tt-heading tt-heading-xsm margin-bottom-60 anim-fadeinup">
                        <h2 className="tt-heading-title">On the line...</h2>
                      </div>

                    </div>

                    <div className="tt-col-lg-8">

                      <div className="anim-fadeinup text-gray">
                        <p>Stay tuned. We are launching soon. We are working hard. We are almost ready to launch. Something awesome is coming soon. Be first to know.</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
