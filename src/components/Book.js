import React from 'react'
import PropTypes from 'prop-types'

const Book = (props) => {

  const { book, moveBook } = props;

  return (
    <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks
                  ? `url(${book.imageLinks.thumbnail})`
                  : ""
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                value={book.shelf ? book.shelf : 'none'}
                onChange={(e) => moveBook(book, e.target.value)}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors}
          </div>
        </div>
      </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
}


export default Book
