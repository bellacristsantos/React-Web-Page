import React from 'react';
import styles from '/styles/work.module.css';

const Work = () => (
  <main>
    <section>
      <div className="container mt-4">
        <h1 className="work-title">Gallery</h1>

        <div className="filter-buttons">
          <button id="filter-2023">2023</button>
          <button id="filter-2022">2022</button>
          <button id="filter-2021">2021</button>
          <button id="filter-Copenhagen">Copenhagen</button>
          <button id="filter-Barcelona">Barcelona</button>
          <button id="filter-London">London</button>
          <button id="filter-Berlin">Berlin</button>
          <button id="sort-year">Sort by Year</button>
          <button id="sort-city">Sort by City</button>
          <button id="reset-filter">Reset Filter</button>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_1.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?a=1"
                  alt="Image 1"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_2.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?b=1"
                  alt="Image 2"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_3.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?c=1"
                  alt="Image 3"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_4.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?d=1"
                  alt="Image 4"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_5.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?e=1"
                  alt="Image 5"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_5.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?f=1"
                  alt="Image 6"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_5.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?g=1"
                  alt="Image 7"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 col-lg-3 overflow-hidden">
            <div className="container-hover">
              <a href="link_to_image_5.html">
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random?h=1"
                  alt="Image 8"
                />
              </a>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Copenhagen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Work;
