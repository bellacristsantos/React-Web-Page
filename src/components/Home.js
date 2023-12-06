import React from 'react';

const Home = () => (
  <main>
    <section>
      <div
        id="home-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#home-carousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#home-carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#home-carousel" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random?a=1"
              className="d-block w-100"
              alt="Slide 1"
              style={{ maxWidth: '1600px', maxHeight: '400px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random?b=1"
              className="d-block w-100"
              alt="Slide 2"
              style={{ maxWidth: '1600px', maxHeight: '400px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random?c=1"
              className="d-block w-100"
              alt="Slide 3"
              style={{ maxWidth: '1600px', maxHeight: '400px' }}
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#home-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#home-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section>

    <section>
      <div className="home-content">
        <p>Explore Captivating Moments: Your Gateway to Stunning Photography</p>
        <i className="ph-thin ph-arrow-down-right"></i>
      </div>
    </section>

    <section>
      <div className="home-all-images-container grid">
        <div className="home-images-one grid">
          <div className="container-hover">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?a=1"
                alt="Abstract Name 1"
              />
            </a>
          </div>
          <div className="container-hover">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?b=1"
                alt="Abstract Name 2"
              />
            </a>
          </div>
          <div className="container-hover">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?c=1"
                alt="Abstract Name 3"
              />
            </a>
          </div>
          <div className="container-hover flat">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?d=1"
                alt="Abstract Name 4"
              />
            </a>
          </div>
        </div>

        <div className="home-images-two grid">
          <div className="container-hover">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?e=1"
                alt="Abstract Name 5"
              />
            </a>
          </div>
          <div className="container-hover">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?f=1"
                alt="Abstract Name 6"
              />
            </a>
          </div>
          <div className="container-hover">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?g=1"
                alt="Abstract Name 7"
              />
            </a>
          </div>
          <div className="container-hover flat">
            <a href="./work.html">
              <img
                loading="lazy"
                src="https://source.unsplash.com/random?h=1"
                alt="Abstract Name 8"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
