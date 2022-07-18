import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class Search extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchedBooks: [],
        errMsg: ''
    }

    // handleQuery = async (query) => {
    //     this.setState({ query: query });

    //     await BooksAPI.search(this.state.query).then((data) => {
    //         if (data && !data.error) {
    //             let foundBooks = data.map(foundBook => {
    //                 this.props.books.map(book => {
    //                     if (book.id === foundBook.id) {
    //                         foundBook.shelf = book.shelf;
    //                     }
    //                 })
    //                 return foundBook;
    //             })
    //             this.setState({ searchedBooks: foundBooks });
    //         } else {
    //             const errMsg = `"${this.state.query}" could not be found in the library.
    //                 Please try again with a different query.`;
    //             this.setState({ searchedBooks: [], errMsg: errMsg });
    //         }
    //     });
    // }

    handleQuery = async (query) => {
        this.setState({ query: query });

        let searchResult = await BooksAPI.search(this.state.query);

        if (searchResult && !searchResult.error) {
            let foundBooks = searchResult.map(foundBook => {
                this.props.books.map(book => {
                    if (book.id === foundBook.id) {
                        foundBook.shelf = book.shelf;
                    }
                })
                return foundBook;
            })
            this.setState({ searchedBooks: foundBooks });
        }
        else {
            const errMsg = `"${this.state.query}" could not be found in the library.
                Please try again with a different query.`;
            this.setState({ searchedBooks: [], errMsg: errMsg });
        }
    }

    render() {
        const { books, moveBook } = this.props
        const { query } = this.state


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => this.handleQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.length > 0
                            ? this.state.searchedBooks.map(book => (
                                <Book
                                    book={book}
                                    key={book.id}
                                    moveBook={moveBook}
                                />))
                            : <li>{this.state.errMsg}</li>
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;
