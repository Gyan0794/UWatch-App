import UWatchContext from '../../Context/UWatchContext'
import {
  FailureViewImage,
  FailureTextSomethingWentWrong,
  HavingTroubleText,
  RetryButton,
} from './StyledComponent'

const FailureViewComponent = props => {
  const {retryFunction} = props

  const retry = () => {
    retryFunction()
  }

  return (
    <UWatchContext.Consumer>
      {value => {
        const {lightTheme, changedAttributesOnThemeChange} = value
        const {
          failureViewImage,
          failureViewImageAlt,
        } = changedAttributesOnThemeChange()

        return (
          <>
            <FailureViewImage
              value={lightTheme}
              src={failureViewImage}
              alt={failureViewImageAlt}
            />
            <FailureTextSomethingWentWrong value={lightTheme}>
              Oops! Something Went Wrong
            </FailureTextSomethingWentWrong>
            <HavingTroubleText>
              We are having some trouble to complete your request. Please try
              again.
            </HavingTroubleText>
            <RetryButton type="button" onClick={retry}>
              Retry
            </RetryButton>
          </>
        )
      }}
    </UWatchContext.Consumer>
  )
}

export default FailureViewComponent
