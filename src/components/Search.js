import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

class Search extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (event) => {
        this.setState({ query: event.target.value })
    }

    render() {
        const { books, moveBook } = this.props
        const { query } = this.state
        const filteredBooks = books.filter(
            book => book.title.toLowerCase().includes(query.toLowerCase())
        )
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={this.updateQuery}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {filteredBooks.map(book => (
                        <Book
                            book={book}
                            key={book.id}
                            onMove={moveBook}
                        />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;
