import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Main from "./Main"
import { tsImportEqualsDeclaration } from "@babel/types"

export default class App extends Component {
  state = {
    isPosting: false,
    blogEntries: [
      {
        user: "Andrew",
        entry:
          "Sunt dolore et sunt laborum commodo. Duis nostrud nulla aute exercitation magna laborum elit. Quis ullamco ipsum cupidatat duis amet dolore deserunt. Aliquip dolor sunt do velit qui occaecat reprehenderit  adipisicing aliquip ut ullamco labore ut. Cupidatat enim nisi occaecat adipisicing duis sunt excepteur enim tempor minim deserunt. Pariatur elit esse pariatur nulla dolor nisi labore aliquip anim. LoremUt ullamco aliqua amet sit voluptate adipisicing."
      },
      {
        user: "Melanie",
        entry:
          "Nisi quis ullamco eiusmod anim velit ea ex ad eiusmod cillum fugiat commodo officia. Duis excepteur aliquip proident occaecat labore cupidatat anim quis tempor amet. Esse labore sunt exercitation id ut dolore duis. Culpa nisi et aliqua consequat. Ex incididunt excepteur proident pariatur anim commodo voluptate laboris cupidatat."
      }
    ]
  }

  toggleIsPosting = () => {
    this.setState({
      isPosting: !this.state.isPosting
    })
  }

  addEntry = (user, entry) => {
    this.setState({
      blogEntries: [{ user, entry }, ...this.state.blogEntries],
      isPosting: !this.state.isPosting
    })
  }

  render() {
    const entries = this.state.blogEntries.map((entry, index) => {
      return (
        <li key={index}>
          <h5>{entry.user}</h5>
          <h6>{entry.entry}</h6>
        </li>
      )
    })
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Main
          isPosting={this.state.isPosting}
          tempPost={this.state.tempPost}
          blogEntries={this.state.blogEntries}
          toggleIsPosting={this.toggleIsPosting}
          addEntry={this.addEntry}
        >
          {" "}
          <ul>{entries}</ul>
        </Main>
      </div>
    )
  }
}
