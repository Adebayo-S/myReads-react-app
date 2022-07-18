import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Search from './components/Search'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(async () => {
      const books = await BooksAPI.getAll()
      this.setState(() => {
        return { books: books }
      })}
    ).catch(err => console.log(err))
  }

  render() {
    return (
        <div className="app">
          <Route exact path="/" render={() => (
            <HomePage
              books={this.state.books}
              moveBook={this.moveBook} />
          )} />

          <Route path="/search" render={() => (
            <Search
              books={this.state.books}
              moveBook={this.moveBook} />
          )} />
        </div>
    )
  }
}

export default BooksApp
