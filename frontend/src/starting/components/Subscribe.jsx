import React from "react";
import styled from "styled-components";
import subscribe from "../assets/subscribe.png";
import man3 from "../assets/man3-removebg-preview.png";
import man4 from "../assets/man4-removebg-preview.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default function Subscribe() {
  return (
    <Section>
      <div className="pt-20 content">
        <h2>Subscribe to get all new products updates</h2>
        <p>
          To get updates about warranty program and more 
          Subscribe to our newsletter and stay Updated!
        </p>
        <div className="input-container">
          <input type="text" placeholder="Enter Email" />
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <div className="m-auto image">
        <img src={man4} alt="subscribe" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 10rem;
  margin-bottom: 5rem;
  .image {
    img {
      width:1800px;
      // heigth:1500px;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    /* width: 50%; */
    h2 {
      font-size: 4rem;
      width:390px;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
    .input-container {
      color:black;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      gap: 1rem;
      border: 1px solid #c4c4c4;
      border-radius: 3rem;
      input {
        border: none;
        &:focus {
          outline: none;
        }
        border-top-left-radius:3rem;
        border-bottom-left-radius:3rem;
        padding-left: 2rem;
        padding-right: 5rem;
        padding-top : 0.6rem;
        padding-bottom :0.6rem;
        font-size: 1.3rem;
      }
      svg {
        color: #2d69fd;
        font-size: 3rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 0 2rem;
    gap: 2rem;
    margin-bottom: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 40vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 2rem;
      }
      p {
        line-height: 1.4rem;
      }
      .input-container {
        display: none;
        width: max-content;
        input {
          width: 50%;
        }
      }
    }
  }
`;
