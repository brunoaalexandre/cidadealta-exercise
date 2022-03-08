import styled from "styled-components";

export const Container = styled.main`
  background: #fff;
  margin: 25px;
  padding: 25px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        width: 38px;
        height: 38px;
        background: #ccc;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      h1 {
        font-size: 20px;
        color: #1c1c1c;
        margin-left: 15px;
        font-weight: bold;
      }
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border-radius: 5px;
    margin-top: 25px;

    th {
      color: #1c1c1c;
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      background: #fafafa;
      border: 1px solid #f0f0f0;
    }

    td {
      padding: 1rem 2rem;
      border: 1px solid #f0f0f0;
      background: #fff;
      color: #1c1c1c;

      button {
        width: 33px;
        height: 33px;
        border: 0;

        transition: filter 0.2s;

        &:nth-child(1) {
          background: #00A3FF;
        }

        &:nth-child(2) {
          background: #00FFC2;
          margin-left: 5px;
        }

        &:nth-child(3) {
          background: #D20F32;
          margin-left: 5px;
        }

        svg {
          color: #fff;
          font-size: 20px;
        }

        &:hover {
          filter: brightness(0.9);
          cursor: pointer;
        }
      }
    }
  }
`;
