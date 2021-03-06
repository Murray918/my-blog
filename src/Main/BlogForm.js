import React, { Component } from 'react'

export default class BlogForm extends Component {
    state = {
        user : '',
        entry : ''
    }

    
    handleChange = event => {
       this.setState({
           [event.currentTarget.name] : event.currentTarget.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.addEntry(this.state.user, this.state.entry)
        
    }
    
	render() { 
		return (
            <div>
				<form>
					<div className="row">
						<div className="twelve columns">
							<label>Your username</label>
							<input
                                onChange={this.handleChange}
								className="u-full-width"
								type="text"
                                name="user"
								placeholder="username"
								id="exampleEmailInput"
                                value={this.state.user}
							/>
						</div>
						<div className="six columns" />
					</div>
					<label>Blog Entry</label>
					<textarea
                        onChange={this.handleChange}
						className="u-full-width"
						placeholder="Your post goes here..."
						id="exampleMessage"
                        name="entry"
                        value={this.state.entry}
					/>
					<input onClick={this.handleSubmit} className="button-primary" type="submit" />
				</form>
			</div>
		)
	}
}


