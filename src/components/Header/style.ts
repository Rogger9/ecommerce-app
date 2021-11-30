import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 4rem;
  background: var(--secundary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  a {
    height: 100%;
  }
`

export const StyledLogo = styled.img`
  height: 100%;
  object-fit: contain;
`

export const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
`

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
    border: 2px solid var(--shadow);
    cursor: pointer;
  }

  /* input[type='text'] {
    height: 100%;
    width: 0;
    border-radius: 1rem;
    border: 2px solid transparent;
    outline: none;
    padding: .2rem 0 .2rem 1.4rem;
    margin-right: .2rem;
    transition: width .2s ease-in-out;

    &:focus { border: 2px solid var(--shadow) }
  } */

  input[type='text'] {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 1rem;
    /* padding: 0 6rem 0 1.4rem; */
  }

  input[type='text']:-webkit-autofill,input[type='text']:-webkit-autofill:focus {
    box-shadow:0 0 0 20px #FFF inset;
    -webkit-text-fill-color:#2C2C2C;
    caret-color:#2C2C2C;
  }

  input[type='text']:-webkit-autofill:focus { box-shadow:0 0 0 20px #FFF inset,0 0 3px #FFF; }

  input:checked ~ div { width: 24rem; }

  input:checked ~ div > input { padding: 0 6rem 0 1.4rem; }
`

export const BoxInputSearch = styled.div`
  height: 100%;
  width: 2rem;
  background: #FFF;
  border-radius: 1rem;
  border: 2px solid transparent;
  transition: width .2s ease-in-out;

  &:focus { border: 2px solid var(--shadow) }
`
