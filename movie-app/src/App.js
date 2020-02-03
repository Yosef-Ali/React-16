import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		input: 'Hello'
	};

	updateInput = event => {
		this.setState({
			input: event.target.value.trim()
		});
	}; // two way binding, updating input filed

	submit = () => {
		console.log(this.text.value);
	}; /* "this.text.value" is added to get the input value */

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Welcome text="Welcome to Using Props" />
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<h3>{this.state.input}</h3> {/** Two day binding */}
				<input
					type="text"
					onChange={this.updateInput}
					value={this.state.input}
				/>
				{/* this.updateInput calls method, this.sate.input assign value */}
				<input type="text" ref={input => (this.text = input)} />
				{/*  ref is used for input with arrow function */}
				<button onClick={this.submit}>Show Value</button>
			</div>
		);
	}
}

class Welcome extends Component {
	render() {
		const { text } = this.props;

		return <h1 className="App-title">{text}</h1>;
	}
}

export default App;
