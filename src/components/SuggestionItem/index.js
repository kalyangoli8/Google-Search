// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {SuggestiionDetails, updateSearchInput} = props
  const {Suggestion} = SuggestiionDetails

  const onClickSuggestion = () => {
    updateSearchInput(Suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
