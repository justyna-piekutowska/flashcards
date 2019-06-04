import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
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
              <FlashcardText />
            </div>
          </div>
        </div>
      )
  }
}

class FlashcardText extends Component {
  constructor(props) {
    super(props)
    this.state = {expression: {pl: String, en: String}};
  }

  componentDidMount() {
    this.saveFlashcard();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  saveFlashcard() {
    const flashcardsData = [{pl: "poprawny", en: "valid"}, {pl: "założyć", en: "assume"}, {pl: "zbiór/ustawić", en: "set"}];
    const flashcardKey = this.getRandomInt(flashcardsData.length);
    const selectedFlashcard = flashcardsData[flashcardKey];

    this.setState({
      expression: {pl: selectedFlashcard.pl, en: selectedFlashcard.en }
    });
  }

  render() {
    return (
      <p id="flashcard_text">{this.state.expression.pl}</p>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
