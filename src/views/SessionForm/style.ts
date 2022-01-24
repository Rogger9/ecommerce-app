import styled from 'styled-components'
import { DivFlex } from '../../styles/DivFlex'

export const StyledSessionForm = styled.form`
  width: 70%;
  min-height: 28rem;
  background: var(--contrast);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: .4rem;
  box-shadow:
    0 0 .2rem .08rem var(--contrast),
    inset 0 0 .1rem .12rem var(--primary)
  ;
  position: relative;
  padding: 1rem;

  & > svg { cursor: pointer; }

  & > svg:first-child {
    position: absolute;
    left: 0;
    top: 0;
    margin: 1rem;

    &:hover {
      opacity: .8;
      filter: drop-shadow(0 0 1px var(--blackOpacity));
    }
  }

  span > * { margin: 0 1rem; }
  span a {
    color: var(--primary);

    &:hover { opacity: .7; text-decoration: underline; }
  }

  @media (max-width: 580px) {
    width: 96%;
  }

  @media (max-width: 380px) {
    padding: .2rem;

    & > svg:first-child { margin: .6rem }

    h2 { font-size: 1.1rem; margin: .4rem 0; }
  }
`

export const StyledForm = styled.form`
  width: 66%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
  padding: .4rem;

  @media ( max-width: 820px ) {
    width: 80%;
  }

  @media ( max-width: 320px ) {
    width: 90%;
  }
`

export const StyledInputs = styled.div`
  position: relative;
  width: 90%;
  height: 2.4rem;

  label {
    position: absolute;
    background: var(--contrast);
    top: -.5rem;
    left: 1rem;
    color: var(--primary);
    font-size: .8rem;
    padding: 0 .3rem;
    cursor: text;
  }

  input {
    height: 100%;
    width: 100%;
    border-radius: .3rem;
    border: 1px solid var(--primary);
    outline: none;
    background: transparent;
    padding: 0 .4rem;
    color: var(--fontColor);

    &::placeholder { color: var(--fontColor) }

    &:focus { box-shadow: 0 0 4px var(--blackOpacity); }

    &:-webkit-autofill, &:-webkit-autofill:focus {
      box-shadow: 0 0 0 20px var(--contrast) inset;
      -webkit-text-fill-color: var(--fontColor);
      color: var(--fontColor);
      caret-color: var(--fontColor);
      font-size: .9rem;
    }

    &:-webkit-autofill:focus {
      box-shadow:
        0 0 0 20px var(--contrast) inset,
        0 0 4px var(--blackOpacity)
      ;
    }
  }
`

export const LineDivisor = styled(DivFlex)`
  width: 60%;
  position: relative;
  margin: 1rem 0;

  hr { width: 100%; }

  span {
    position: absolute;
    top: -.52rem;
    background: var(--contrast);
    padding: 0 .4rem;
    font-weight: bold;
  }
`

export const StyledOtherLogin = styled(DivFlex)`
  height: 2rem;
  gap: 2rem;
  margin: 1rem 0;

  a {
    height: 2rem;
    width: 2rem;
    background: var(--primary);
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 .08rem .08rem var(--shadow);

    &:hover { background: var(--secundary); }

    &:active {
      box-shadow:
        0 0 .1rem var(--contrast),
        inset 0 0 .2rem var(--primary)
      ;
      opacity: .9;
    }
  }

  @media (max-width: 380px) {
    gap: 1rem;
  }
`
