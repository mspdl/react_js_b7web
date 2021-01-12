import React from 'react'
import { PaginationArea } from './styled';

export default function Pagination(props) {
    return (
        props.pageCount > 1 &&
        <PaginationArea>
            {props.pagination.map(page =>
                <div onClick={() => props.setCurrentPage(page)} key={page} className={page === props.currentPage ? 'page-item active' : 'page-item'}>{page}</div>
            )}
        </PaginationArea>
    );
}