import styled from 'styled-components'
import { DivFlex } from '../../../styles/DivFlex'

export const StyledFormSearch = styled.form`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  input[type='checkbox'] { display:none; }

  label[for='check'] {
    height: 100%;
    width: 2rem;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    border-radius: 50%;
    border: 2px solid var(--black);
    cursor: pointer;
  }


  label[for='check']:hover {
    box-shadow: 0 0 4px var(--contrast);
    border: 2px solid transparent;
  }

  label > svg { color: var(--black); }

  input[type='text'] {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1rem;
  }

  input[type='text']:-webkit-autofill,input[type='text']:-webkit-autofill:focus {
    box-shadow:0 0 0 20px #FFF inset;
    -webkit-text-fill-color:#2C2C2C;
    caret-color:#2C2C2C;
    font-size: 1rem;
  }

  input[type='text']:-webkit-autofill:focus { box-shadow:0 0 0 20px #FFF inset,0 0 3px #FFF; }

  input:checked ~ div { width: 24rem; }

  input:checked ~ div > input { padding: 0 7rem 0 2rem; }

  @media (max-width: 768px) {
    margin-right: .6rem;
  }

  @media (max-width: 650px) {
    div {
      opacity: 0;
      visibility: hidden;
      transform: translate(.24rem, 2.36rem);
      transition: opacity .2s ease-in-out;
      z-index: 100;
    }

    input:checked ~ label {
      &::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        bottom: -.6rem;
        border-right: .5rem solid transparent;
        border-left: .5rem solid transparent;
        border-bottom: .5rem solid #FFF;
        border-radius: .2rem;
      }
    }

    input:checked ~ div {
      opacity: 1;
      visibility: visible;
      width: 20rem;
    }

    input:checked ~ div > input { padding: 0 5rem 0 2rem; }

    label[for='check'] { z-index: 100; }
  }

  @media (max-width: 580px) {
    div {
      position: fixed;
      height: 2rem;
      transform: translate(-6rem, 2.36rem);
    }
  }

  @media (max-width: 440px) {
    div { transform: translate(-3.4rem, 2.36rem); }
  }

  @media (max-width: 340px) {
    input:checked ~ div { width: 18rem; }
  }
`

export const BoxInputSearch = styled(DivFlex)`
  height: 100%;
  width: 2rem;
  background: #FFF;
  border-radius: 1rem;
  border: 2px solid transparent;
  position: relative;
  transition: width .3s ease-in;

  input:focus { box-shadow: 0 0 4px var(--shadow) }

  svg {
    color: var(--black);
    position: absolute;
    left: .6rem;
    cursor: pointer;

    &:hover { color: var(--red); }
  }

  button {
    position: absolute;
    right: 2.2rem;
    box-shadow: 0 0 3px var(--blackOpacity);
    border: none;
    font-weight: normal;
    padding: .2rem .4rem .2rem;

    &:hover { background: var(--primary); color: var(--fontColor); border: none; }
  }

  @media (max-width: 650px) {
    button { right: 1rem; }
  }
`
