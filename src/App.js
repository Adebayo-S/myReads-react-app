import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  moveBook = (book) => {
    BooksAPI.update(book, book.shelf).then(() => {
      this.setState(state => {
        const books = state.books.filter(b => b.id !== book.id)
        return { books: books }
      })}
    ).catch(err => console.log(err))
  }

  /*
    NOTES: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.
  */

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
