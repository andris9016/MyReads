// React
import React, { Component } from 'react'

// React router
import { Link } from 'react-router-dom'

// Debounce Input
import DebounceInput from 'react-debounce-input'

// API
import * as BooksAPI from '../BooksAPI'

// Component
import Book from './Book'

class Search extends Component {
	
	state = {
		query: '',
		searchResults: []
	}
	
	searchBook = (query) => {
		
		if(!query) {
			this.setState({
				query: '',
				searchResults: []
			})
			
		} else  {
			BooksAPI.search(query).then(
				(returnedBooks) => {
					
					if(returnedBooks.error) {
						this.setState({
							query: '',
							searchResults: []
						})
						
					} else {
						this.setState({
							query: query,
							searchResults: returnedBooks.map((returnedBook) => {
											 this.props.books.map((book) => {
												if(book.id === returnedBook.id) {
													returnedBook.shelf = book.shelf
												}
											 })
											 
											 return returnedBook
										  })
							
						})
					}
					
				}
			)
		}
	}
	
	render() {
		
		
		return(
			<div className="search-books">
				
				<div className="search-books-bar">
				  <Link className="close-search" to='/'>Close</Link>
				  <div className="search-books-input-wrapper">
					
					<DebounceInput
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
						debounceTimeout={300}
						element="input"
						onChange={(event) => this.searchBook(event.target.value)}
                    />
					
				  </div>
				</div>
				<div className="search-books-results">
				  <ol className="books-grid">
					{this.state.searchResults.length > 0 && this.state.searchResults.map((book, index) => (

                        <li key={index}>
                            <Book
                                thumb={book.imageLinks ? book.imageLinks.thumbnail : `http://via.placeholder.com/128x193?text=No%20Cover`}
                                title={book.title}
                                authors={book.authors}
                                shelf={book.shelf}
                                onUpdateBook={this.props.onUpdateBook}
                                book={book}
                            />
                        </li>
						
					))}
				  </ol>
				</div>
			 </div>
		)
		
	}
}

export default Search