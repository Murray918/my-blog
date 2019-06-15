import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
	state = {
		isPosting: false,
    tempPost: '',
    blogEntries : [{
      user : 'Andrew',
      entry : 'Sunt dolore et sunt laborum commodo. Duis nostrud nulla aute exercitation magna laborum elit. Quis ullamco ipsum cupidatat duis amet dolore deserunt. Aliquip dolor sunt do velit qui occaecat reprehenderit  adipisicing aliquip ut ullamco labore ut. Cupidatat enim nisi occaecat adipisicing duis sunt excepteur enim tempor minim deserunt. Pariatur elit esse pariatur nulla dolor nisi labore aliquip anim. LoremUt ullamco aliqua amet sit voluptate adipisicing.',
    }]
    
	}

	handleChange = event => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		})
	}

	handleClick = event => {
		this.setState({
			isPosting: !this.state.isPosting
		})
	}

	render() {
		return (
			<div className="App container">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						{this.state.tempPost !== '' ? <h1>{this.state.tempPost}</h1> : null}
					</div>
					<div>
						{!!this.state.isPosting ? (
							<textarea
								type="tex
                t"
								onChange={this.handleChange}
								value={this.state.tempPost}
								name="tempPost"
							/>
						) : null}
					</div>
					<button onClick={this.handleClick}>Click Me</button>
				</header>
			</div>
		)
	}
}
