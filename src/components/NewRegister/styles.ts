import styled from "styled-components";
import { transparentize, darken } from "polished";

export const Container = styled.main`
  background: #fff;
  margin: 25px;
  padding: 25px;

  /* input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: normal;
    font-size: 1rem;
  } */

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 10px;
      margin-bottom: 20px;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      padding: 4px 11px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      line-height: 27px;
    }

    div {

    }
  }
`;

export const StatusContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 40px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;

  background:${(props) => props.isActive
  ? transparentize(0.9, colors[props.activeColor])
  : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;

  &:nth-child(1) {
    margin-right: 25px;
  }

  transition: border 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
    cursor: pointer;
  }

  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 150px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background: #33cc95;
    color: #fff;
    right: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }
  }
`;
