import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.saveFlashcard();
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  saveFlashcard() {
    const flashcardsData = [
      {pl: "poprawny", en: "valid"},
      {pl: "założyć", en: "assume"},
      {pl: "zbiór/ustawić", en: "set"}
    ];
    const flashcardKey = this.getRandomInt(flashcardsData.length);
    const selectedFlashcard = flashcardsData[flashcardKey];

    return {
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

  handleClick(e) {
    e.preventDefault();
    const newWord = this.newWordAfterClick();
    this.setState({
      currentlyDisplayed: newWord
    })
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
          </div>
        </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
