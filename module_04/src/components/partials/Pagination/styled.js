import styled from 'styled-components';

export const PaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    .page-item {
        width: 10%;
        height: 30px;
        border: 1px solid #999;
        border-radius: 20%;
        margin-right: 5px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        cursor: pointer;

        &:hover {
            border: 1px solid #9BB83C;
            color: #9BB83C;
        }
    }

    .active {
        background-color: #9BB83C;
        color: #FFF;
        border: 0px;
    }
`