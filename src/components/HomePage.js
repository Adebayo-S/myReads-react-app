import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class HomePage extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.books.filter(
                            book => book.shelf === 'currentlyReading').map(
                            book => <Book
                                        book={book}
                                        key={book.id}
                                        onChange={this.moveBook} />
                            )}
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.books.filter(
                            book => book.shelf === 'wantToRead').map(
                            book => <Book book={book} key={book.id}>
                                <button onClick={() => this.moveBook(book, 'wantToRead')}>Move to another shelf</button>
                            </Book>
                            )}
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.books.filter(
                            book => book.shelf === 'read').map(
                            book => <Book book={book} key={book.id}>
                                <button onClick={() => this.moveBook(book, 'read')}>Move to another shelf</button>
                            </Book>
                            )}
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        )
    }


}

export default HomePage
