import React from "react";
import styled, { css, keyframes } from "styled-components";
import { setColor } from "../../Styles";

const Banner = ({ title, className, text, children, greeting }) => {
  return (
    <div className={className}>
      <h1>
        {greeting}
        <span> {title}</span>
      </h1>
      <div className='info'>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 60px 32px;
  /* setRem */
  letter-spacing: 3px;
  /* setLetterSpacing */
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: 48px;
    /* setRem */
    color: ${setColor.primaryColor};
  }
  h1 > span {
    color: ${setColor.mainWhite};
  }
  p {
    width: 85%;
    margin: 0;
  }

  @media (min-width: 768px) {
    width: 70vw;
    border: 6px solid ${setColor.primaryColor};
    p {
      width: 75%;
    }
  }
  h1 {
    /* animation */
  }
  .info {
    /* animation */
  }
`;
export default BannerWrapper;
