import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {

        if (!this.props.book) {
            return <h3>Select a book to get started</h3>
        }
        return (
            <div className="right-col">
                <h3>Books details:</h3>
                <p><strong>Title: </strong>{this.props.book.title}</p>
                <p><strong>Pages: </strong> {this.props.book.pages}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);
