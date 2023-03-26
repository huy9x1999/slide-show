import styled from "styled-components";

export const WrapSlides = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  .slick-list {
    overflow: visible !important;
  }

  .slick-track {
    display: flex !important;
    // align-items: flex-end;
    align-items: baseline;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 20px 0 60px 0;
  }
`;
