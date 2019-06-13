import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const flashcardsData = [
  {pl: "poprawny", en: "valid"},
  {pl: "założyć", en: "assume"},
  {pl: "zbiór/ustawić", en: "set"}
];

const flashcardsDataLength = flashcardsData.length;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.saveFlashcard();
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  flashcardKey() {
    return this.getRandomInt(flashcardsDataLength);
  }

  saveFlashcard() {
    const selectedFlashcard = flashcardsData[this.flashcardKey()];

    return {
      flashcardKey: this.flashcardKey(),
      expression: {pl: selectedFlashcard.pl, en: selectedFlashcard.en},
      currentlyDisplayed: selectedFlashcard.pl
    };
  }

  newWordAfterClick() {
    const currentlyDisplayed = this.state.currentlyDisplayed;
    const currentlyExpression = this.state.expression;

    if (currentlyExpression.pl === currentlyDisplayed) {
      return currentlyExpression.en;
    } else {
      return currentlyDisplayed;
    }
  }

  findNewKey(currentKey){
    if (currentKey < flashcardsDataLength - 1) {
      return currentKey + 1;
    } else {
      return this.flashcardKey()
    }
  }

  nextExpression(){
    const currentExpressionKey = this.state.flashcardKey;
    const newExpressionKey = this.findNewKey(currentExpressionKey);
    const selectedFlashcard = flashcardsData[newExpressionKey];
    this.setState({
      flashcardKey: newExpressionKey,
      expression: {pl: selectedFlashcard.pl, en: selectedFlashcard.en},
      currentlyDisplayed: selectedFlashcard.pl
    })
  }

  handleClick(e) {
    e.preventDefault();
    const newWord = this.newWordAfterClick();
    this.setState({
      currentlyDisplayed: newWord
    })
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.nextExpression();
  }

  render () {
    return (
        <div>
          <div className="header">
           	<h1>YourOwnFlashcards</h1>
           	<div className="hamburgerMenu">
        		<div className="hamburgerBars">
                	<div className="TopBar"></div>
                	<div className="CenterBar"></div>
                	<div className="BottomBar"></div>
             	</div>
           	</div>
          </div>
          <div className="flashcardElement">
            <div className="flashcard">
              <p id="flashcard_text" onClick={this.handleClick}>{this.state.currentlyDisplayed}</p>
            </div>
            <div className="nextButton">
              <button onClick={this.handleButtonClick}>Next</button>
            </div>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
