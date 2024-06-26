import styled from 'styled-components'
import device from '../device'

export const Button = styled.button`
  border-radius: 4px;
  color: var(--grey);
  padding: 0.65em 1.2em;
  font-size: 1.4rem;
  font-weight: 500;

  transition: color 300ms, background-color 300ms;

  &:focus {
    outline: 2px solid var(--purple);
    outline-offset: 8px;
  }

  @media screen and (${device.laptop}) {
    font-size: 1.6rem;
    padding: 0.75em 1.5em;
    border-radius: 8px;
  }
`

export const NextButton = styled(Button)`
  background-color: var(--denim);
  color: var(--white);
  margin-inline: auto 0;

  &:hover {
    background-color: var(--button-active);
  }
`

export const ConfirmButton = styled(NextButton)`
  background-color: var(--purple);
  padding: 0.65em 1.6em;

  &:hover {
    background-color: var(--button-confirm-active);
  }

  @media screen and (${device.laptop}) {
    padding: 0.65em 2em;
  }
`

export const PreviousButton = styled(Button)`
  background-color: transparent;
  color: var(--grey);

  &:hover {
    color: var(--denim);
  }

  @media screen and (${device.laptop}) {
    padding-left: 0;
  }
`

export const ButtonFormContainer = styled.div`
  background-color: var(--white);
  display: flex;
  width: 100%;
  padding: 1em 1em 1em 0em;

  @media screen and (${device.laptop}) {
    padding: 0;
    margin-block-end: 1.7rem;
  }
`
