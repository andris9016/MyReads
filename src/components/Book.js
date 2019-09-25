// React
import React, { Component } from 'react'

class Book extends Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193,
                        backgroundImage: `url(${this.props.thumb})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select 
                            value={this.props.shelf||"none"} //if you have a shelf ID use it
                            onChange={(event) => this.props.onUpdateBook(this.props.book, event.target.value)}
                            >
                            <option disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>

        )
    }
}

export default Book