import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render () {
    return (
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
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

