import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
`
export const ImageContainer = styled.div``

export const MainContainer = styled.div`
  background-color: #1b1c22;
  padding: 20px;
  display: flex;
`

export const TextContainer = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
`

export const ImageItem = styled.img`
  height: 300px;
  margin-top: 50px;
  margin-right: 5px;
`

export const TextAreaInput = styled.textarea`
  background-color: #25262c;
  font-size: 20px;
  height: 480px;
  width: 400px;
  color: #ffffff;
  font-weight: ${props => (props.buttonWeight ? 'bold' : 'normal')};
  font-style: ${props => (props.buttonStyle ? 'italic' : 'normal')};
  text-decoration: ${props => (props.buttonText ? 'underline' : 'normal')};
  padding: 10px;
  border: 1px solid #334155;
`

export const ButtonContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0px;
  padding: 20px;
`

export const ButtonList = styled.li``

export const Button = styled.button`
  color: ${props => (props.buttonWeight ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const Button2 = styled.button`
  color: ${props => (props.buttonStyle ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const Button3 = styled.button`
  color: ${props => (props.buttonText ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
