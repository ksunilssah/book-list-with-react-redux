import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import './book-list.scss';

class BookList extends Component {

    renderList() {
        return (
            this.props.books.map(book => {
                return (
                    <li key={book.title} className="list-group-item">
                        <a onClick={() => this.props.selectBook(book)} href="#">{book.title}</a>
                    </li>
                );
            })
        );
    }

    render() {
        return (
            <div className="left-col">
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
}

const mapDispatchToPros = (dispatch) => {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPros)(BookList);

