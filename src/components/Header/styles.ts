import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;

  justify-content: flex-end;
  padding-right: 25px;
  padding-top: 13px;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  div {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    background: #1c1c1c;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: inline-block;
      color: #fff;
      font-weight: 600;
      font-size: 24px;
    }

    transition: 0.2s;

    &:hover {
      cursor: pointer;

      background: #fff;

      span {
        color: #1c1c1c;
      }
    }
  }
`;
