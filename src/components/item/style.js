import styled from "styled-components";

export const WrapSlideItem = styled.div`
  position: relative;
  .test {
    // position: absolute;
    // top: calc(100% + 30px);

    width: 100%;
    margin-top: 50px;
    // left: 0;
    min-height: 200px;
    border: 1px solid #000;
    h4 {
      text-align: center;
      border-bottom: 1px solid #000;
      margin: 0;
      padding: 12px 10px;
      font-size: 18px;
    }

    ul {
      list-style-type: none;
      padding: 0 24px;
    }

    li {
      padding: 9px 0px;
      font-size: 16px;
    }
    @media (max-width: 600px) {
      z-index: -1;
      width: 250px;
      margin: 30px auto 0 auto;
    }
  }
`;

export const SlideItem = styled.div`
  transition: 0.5s ease-out;
  width: 150px !important;
  margin: 0 auto;
  display: flex !important;
  height: 150px;
  border-radius: 100%;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 120px !important;
    height: 120px;
  }

  @media (max-width: 600px) {
    width: 100% !important;
    max-width: 250px;
    height: 250px;
  }

  &.beside-center-slide {
    transition-delay: 0;
    width: 200px !important;
    height: 200px;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 150px !important;
      height: 150px;
    }

    @media (max-width: 900px) {
      width: 140px !important;
      height: 140px;
    }

    @media (max-width: 600px) {
      width: 100% !important;
      max-width: 250px;
      height: 250px;
    }
  }

  &.center-slide {
    width: 100% !important;
    max-width: 250px;
    height: 250px;
    @media (max-width: 1200px) {
      width: 210px !important;
      height: 210px;
    }

    @media (max-width: 1200px) {
      width: 180px !important;
      height: 180px;
    }

    @media (max-width: 600px) {
      width: 100% !important;
      max-width: 250px;
      height: 250px;
    }
  }

  h3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
