import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Breaking Wave | Tank - Creative Portfolio Showcase HTML Website
          Template by Themetorium
        </title>

        {/* <!-- Meta --> */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Download Tank - Creative Portfolio Showcase HTML Website Template that comes with rich features and well-commented code. Made by Themetorium."
        />
        <meta name="author" content="themetorium.net" />

        {/* <!-- Mobile Meta --> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <!-- Favicon (http://www.favicon-generator.org/) --> */}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />

        {/* <!-- Google Analytics - Global site tag (gtag.js) --> */}
        {/* <!-- Paste your Google Anaytics code here. --> */}

        {/* <!-- Google fonts (https://www.google.com/fonts) --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <!-- Body font --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Secondary/Alter font --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Libs and Plugins CSS --> */}
        {/* <!-- Normalize CSS (https://necolas.github.io/normalize.css/) --> */}
        <link
          rel="stylesheet"
          href="/assets/vendor/normalize/normalize.min.css"
        />
        {/* <!-- Font Icons CSS (https://fontawesome.com) Free version! --> */}
        <link
          rel="stylesheet"
          href="/assets/vendor/fontawesome/css/fontawesome-all.min.css"
        />
        {/* <!-- Swiper CSS (https://swiperjs.com/) --> */}
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/css/swiper-bundle.min.css"
        />
        {/* <!-- lightGallery CSS (http://sachinchoolur.github.io/lightGallery) --> */}
        <link
          rel="stylesheet"
          href="/assets/vendor/lightgallery/css/lightgallery.min.css"
        />

        {/* <!-- Template master CSS --> */}
        <link rel="stylesheet" href="/assets/css/helper.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
      </Head>

      {/* <!-- Core JS --> */}
      <Script src="/assets/vendor/jquery/jquery.min.js" />
      {/* <!-- jquery JS (https://jquery.com) --> */}

      {/* <!-- Libs and Plugins JS --> */}
      {/* <!-- GSAP JS (https://greensock.com/gsap/) --> */}
      <Script src="/assets/vendor/gsap/gsap.min.js" />
      {/* <!-- GSAP ScrollToPlugin JS (https://greensock.com/scrolltoplugin/) --> */}
      <Script src="/assets/vendor/gsap/ScrollToPlugin.min.js" />
      {/* <!-- GSAP ScrollTrigger JS (https://greensock.com/scrolltrigger/) --> */}
      <Script src="/assets/vendor/gsap/ScrollTrigger.min.js" />

      {/* <!-- Smooth Scrollbar JS (https://github.com/idiotWu/smooth-scrollbar/) --> */}
      <Script src="/assets/vendor/smooth-scrollbar.js" />
      {/* <!-- Swiper JS (https://swiperjs.com/) --> */}
      <Script src="/assets/vendor/swiper/js/swiper-bundle.min.js" />
      {/* <!-- imagesloaded JS (more info: https://imagesloaded.desandro.com/) --> */}
      <Script src="/assets/vendor/isotope/imagesloaded.pkgd.min.js" />
      {/* <!-- Isotope JS (http://isotope.metafizzy.co) --> */}
      <Script src="/assets/vendor/isotope/isotope.pkgd.min.js" />
      {/* <!-- Isotope Packery Mode JS (https://isotope.metafizzy.co/layout-modes/packery.html) --> */}
      <Script src="/assets/vendor/isotope/packery-mode.pkgd.min.js" />
      {/* <!-- lightGallery Plugins JS (http://sachinchoolur.github.io/lightGallery) --> */}
      <Script src="/assets/vendor/lightgallery/js/lightgallery-all.min.js" />
      {/* <!-- A jQuery plugin that adds cross browser mouse wheel support (https://github.com/jquery/jquery-mousewheel) --> */}
      <Script src="/assets/vendor/jquery.mousewheel.min.js" />

      {/* <!-- Theme master JS --> */}
      <Script src="/assets/js/theme.js" />

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
                        <h2 className="tt-heading-title">The Story</h2>
                      </div>

                    </div>

                    <div className="tt-col-lg-8">

                      <div className="anim-fadeinup text-gray">
                        <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly <a href="https://themetorium.net" target="_blank" rel="noopener">thoughts remember</a> mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties.</p>

                        <p>Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging objection for elsewhere.</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div className="tt-section">
                <div className="tt-section-inner">
                  <div className="tt-image tti-fixed-height">
                    <figure>
                      <img className="anim-image-parallax tt-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/portfolio/single-project/project-7/project-7-1.jpg" alt="image" />
                      <figcaption>
                        Image Caption
                      </figcaption>
                    </figure>
                  </div> 
              </div>

              <div className="tt-section padding-top-xlg-100 padding-bottom-xlg-100 padding-left-sm-3-p padding-right-sm-3-p">
                <div className="tt-section-inner tt-wrap max-width-900">
                  <div className="tt-heading tt-heading-xsm anim-fadeinup">
                    <h2 className="tt-heading-title">Afterwords</h2>
                  </div>

                  <div className="anim-fadeinup text-gray">
                    <p>Ought these are balls place mrs their times add she. Taken no great widow spoke of it small. Genius use except son esteem merely her limits. Sons park by do make on. It do oh cottage offered cottage in written. Especially of dissimilar up attachment court themselves by interested boisterous. Linen mrs seems men table to quitting.</p>
                  </div>

                </div>
              </div>
              <div className="tt-section padding-bottom-xlg-150">
                <div className="tt-section-inner">
                  <div className="tt-content-carousel cursor-drag cc-scale-down cc-hide-pagination cc-hide-navigation" data-loop="true" data-simulate-touch="true" data-speed="900">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="tt-content-carousel-item">
                            <figure className="cover-opacity-1">
                              <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/portfolio/single-project/project-7/project-7-2.jpg" alt="Image" />
                            </figure>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tt-content-carousel-item">
                            <figure className="cover-opacity-1">
                              <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/portfolio/single-project/project-7/project-7-3.jpg" alt="Image" />
                            </figure>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tt-content-carousel-item">
                            <figure className="cover-opacity-1">
                              <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/portfolio/single-project/project-7/project-7-4.jpg" alt="Image" />
                            </figure>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="tt-content-carousel-item">
                            <figure className="cover-opacity-1">
                              <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/portfolio/single-project/project-7/project-7-5.jpg" alt="Image" />
                            </figure>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tt-content-carousel-item">
                            <figure className="cover-opacity-1">
                              <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/portfolio/single-project/project-7/project-7-6.jpg" alt="Image" />
                            </figure>
                          </div>
                        </div>

                      </div>

                    </div>
                    <div className="tt-cc-nav-prev">
                      <div className="tt-cc-nav-arrow magnetic-item"></div>
                    </div>
                    <div className="tt-cc-nav-next">
                      <div className="tt-cc-nav-arrow magnetic-item"></div>
                    </div>

                    <div className="tt-cc-pagination hide-cursor"></div>

                  </div>

                </div>
              </div>
            </div>

            <footer id="tt-footer">
						<div className="tt-footer-inner">

							<div className="footer-col tt-align-center-left">
								<div className="footer-col-inner">

									<div className="tt-btn tt-btn-link">
										<a href="#" className="scroll-to-top" data-hover="Back to top">Back to top</a>
									</div>

								</div>
							</div>
							<div className="footer-col tt-align-center order-m-last">
								<div className="footer-col-inner">

									<div className="tt-copyright">
										© Copyright - <a href="https://themetorium.net" target="_blank" rel="noopener" className="tt-link">Themetorium.net</a>
									</div>

								</div>
							</div>
							<div className="footer-col tt-align-center-right">
								<div className="footer-col-inner">

									<div className="footer-social">
										<div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt"></i></div>
										<div className="social-buttons">
											<ul>
												<li><a href="https://www.facebook.com/themetorium" className="magnetic-item" target="_blank" rel="noopener">Fb.</a></li>
												<li><a href="https://twitter.com/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Tw.</a></li>
												<li><a href="https://www.youtube.com/" className="magnetic-item" target="_blank" rel="noopener">Yt.</a></li>
												<li><a href="https://dribbble.com/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Dr.</a></li>
												<li><a href="https://www.behance.net/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Be.</a></li>
											</ul>
										</div>
									</div>

								</div>
							</div>

						</div>
					</footer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
