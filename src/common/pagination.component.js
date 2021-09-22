import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    render() { 
        const { totalItems, pageCount, activePage, onClickPage } = this.props;

        const totalPages = Math.ceil(totalItems / pageCount)+1;

        const pages = _.range(1, totalPages, 1); // [1, 2, 3, 4]

        if(totalItems <= pageCount) return null;

        return (
            <nav aria-label="Page navigation example d-flex flex-wrap">
                <ul className="pagination">
                    <li 
                        className="page-item"
                        onClick={() => activePage-1 >= 1 ? onClickPage(activePage-1) : null}
                    >
                        <a className="page-link" style={{cursor: 'pointer'}}>Previous</a>
                    </li>
                    {pages.map(page => (
                        <li 
                            className={activePage === page ? "page-item active" : "page-item"}
                            onClick={() => onClickPage(page)}
                        >
                            <a className="page-link" style={{cursor: 'pointer'}}>{page}</a>
                        </li>)
                    )}
                    <li 
                        className="page-item"
                        onClick={() => activePage+1 <= totalPages-1 ? onClickPage(activePage+1) : null}
                    >
                        <a className="page-link" style={{cursor: 'pointer'}}>Next</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;