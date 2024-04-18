import {
  ButtonFormContainer,
  ConfirmButton,
  NextButton,
  PreviousButton,
} from '@/src/styles/utils/Button.styled.tsx'

function Buttons({ goForward, goBack, whichStep }: buttons) {
  return (
    <ButtonFormContainer>
      {whichStep !== 'first' && (
        <PreviousButton type="button" onClick={goBack} id="previousButton">
          Go Back
        </PreviousButton>
      )}
      {whichStep === 'end' ? (
        <ConfirmButton type="button" onClick={goForward} id="confirmButton">
          Confirm
        </ConfirmButton>
      ) : (
        <NextButton type="button" id="nextButton" onClick={goForward}>
          Next Step
        </NextButton>
      )}
    </ButtonFormContainer>
  )
}

type step = 'first' | 'middle' | 'end'
interface buttons {
  goForward: () => void
  goBack?: () => void
  whichStep: step
}

export default Buttons
