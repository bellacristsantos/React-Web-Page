import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --bg-grey: #3c3c3b;
    --dark-grey: #343432;
    --black: #131515;
    --violet: #4c1a57;
    --yellow: #f5d547;
    --bright: #ebebd3;
    --gradient-color: linear-gradient(90deg, #4c1a57 0%, #131515 100%);
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    background: var(--black);
    color: var(--bright);
    padding: 14rem 13.4rem 14rem 11rem;
  }

  body,
  html,
  button,
  input,
  select,
  textarea {
    font-family: 'Poppins', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 500;
    color: var(--black);
    border: solid 1px var(--black);
    border-radius: 0.8rem;
    width: 12rem;
    height: 6rem;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }

  #home-carousel {
    margin-top: 4rem;
  }

  .grid {
    display: grid;
    gap: 3.2rem;
  }

  .home-content {
    max-width: 26rem;
    margin-top: 8rem;
  }

  .home-content p {
    font-size: 2.4rem;
    font-weight: 400;
  }

  .home-title {
    font-size: 4.8rem;
    font-weight: 700;
  }

  .home-content i {
    font-size: 3.2rem;
    color: var(--black);
    display: block;
  }

  .carousel-indicators {
    visibility: hidden;
  }

  .home-all-images-container {
    margin-left: 30.6rem;
  }

  .home-images-one .container-hover:nth-child(1) {
    grid-row: 1/3;
  }

  .home-images-one .container-hover:nth-child(1) img,
  .home-images-two .container-hover:nth-child(3) img {
    aspect-ratio: 9/16;
  }

  .flat {
    grid-column: 1/3;
  }

  .flat img {
    aspect-ratio: 16/9;
  }

  .home-images-two .container-hover:nth-child(3) {
    grid-column: 2;
    grid-row: 1/3;
  }

  .container-hover:hover {
    color: var(--black);
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    html {
      font-size: 80%;
    }

    body {
      max-width: 768px;
      margin: 0 auto;
    }

    #home-carousel {
      margin-top: 2rem;
    }

    .home-content {
      margin-top: 4rem;
      max-width: 100%;
    }

    .home-content p {
      margin-top: 2rem;
      font-size: 1.2rem;
    }

    .home-content i {
      font-size: 1.6rem;
      color: var(--black);
      display: block;
      margin-bottom: 2rem;
    }

    .home-title {
      font-size: 1.8rem;
    }

    .home-all-images-container {
      margin-left: 0;
    }

    .home-images-one,
    .home-images-two {
      gap: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 80%;
    }

    body {
      display: inline-block;
      max-width: 480px;
    }
  }
`;
