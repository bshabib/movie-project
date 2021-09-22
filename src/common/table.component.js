import React from 'react';
import TableHeader from './table-header.component';
import TableBody from './table-body.component';

const Table = ({ columns, items, onSort, sortColumn }) => {
    return (
        <table class="table">
            <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
            <TableBody columns={columns} items={items} />
        </table>
    );
}
 
export default Table;