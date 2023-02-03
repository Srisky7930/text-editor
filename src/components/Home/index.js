import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'

import {
  AppContainer,
  MainContainer,
  TextContainer,
  TextAreaInput,
  ImageItem,
  Button,
  Button2,
  Button3,
  ButtonContainer,
  MainHeading,
  ImageContainer,
  ButtonList,
} from './styledComponents'

class Home extends Component {
  state = {
    buttonWeight: false,
    buttonStyle: false,
    buttonText: false,
  }

  onClickButtonWeight = () => {
    this.setState(prevState => ({
      buttonWeight: !prevState.buttonWeight,
    }))
  }

  onClickButtonStyle = () => {
    this.setState(prevState => ({
      buttonStyle: !prevState.buttonStyle,
    }))
  }

  onClickButtonUnderline = () => {
    this.setState(prevState => ({
      buttonText: !prevState.buttonText,
    }))
  }

  render() {
    const {buttonStyle, buttonText, buttonWeight} = this.state
    return (
      <AppContainer>
        <MainContainer>
          <ImageContainer>
            <MainHeading> Text Editor </MainHeading>
            <ImageItem
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <ButtonContainer>
              <ButtonList>
                <Button
                  data-testid="bold"
                  buttonWeight={buttonWeight}
                  onClick={this.onClickButtonWeight}
                >
                  <VscBold size={25} />
                </Button>
              </ButtonList>
              <ButtonList>
                <Button2
                  data-testid="italic"
                  buttonStyle={buttonStyle}
                  onClick={this.onClickButtonStyle}
                >
                  <GoItalic size={25} />
                </Button2>
              </ButtonList>

              <ButtonList>
                <Button3
                  buttonText={buttonText}
                  data-testid="underline"
                  onClick={this.onClickButtonUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ButtonList>
            </ButtonContainer>
            <TextAreaInput
              type="text"
              buttonWeight={buttonWeight}
              buttonStyle={buttonStyle}
              buttonText={buttonText}
            />
          </TextContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default Home
