import styled from "styled-components";

import logoBackground from "../../assets/logo-login-background.png";

export const Container = styled.main`
  width: 100%;
  display: flex;
`;

export const LeftContent = styled.div`
  width: 50%;
  min-height: 100vh;
  background-image: url(${logoBackground});
  background-color: #1c1c1c;
  background-position: center center;
  background-size: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 80px;
  flex-direction: column;

  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 72px;
    line-height: 70px;
  }

  p {
    color: #fff;
    font-size: 18px;
    margin-top: -20px;
  }
`;

export const RightContent = styled.div`
  width: 50%;
  min-height: 100vh;
  background: #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 200px;
    margin-bottom: 27px;
  }

  form {
    width: 426px;
    display: flex;
    flex-direction: column;

    input {
      width: 426px;
      height: 77px;
      background: #fff;
      color: #000;
      margin-bottom: 27px;
      border-radius: 10px;
      font-size: 18px;
      border: none;
      padding-left: 20px;
    }

    button {
      width: 426px;
      height: 77px;
      border-radius: 10px;
      border: none;
      background: #1c1c1c;
      color: #fff;
      font-size: 18px;

      transition: 0.2s;

      &:hover {
        background: #383838;
        cursor: pointer;
      }
    }
  }
`;
