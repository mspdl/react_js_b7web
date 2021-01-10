import styled from 'styled-components'

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .left-side {
        width: 250px;
        margin-right: 10px;

        .filter-name {
            font-size: 15px;
            margin: 10px 0;
        }

        input, select {
            width: 100%;
            height: 40px;
            border: 2px solid #9BB83C;
            border-radius: 5px;
            outline: 0;
            font-size: 15px;
            color: #000;
            padding: 10px;
        }

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .category-item {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            color: #000;
            cursor: pointer;

            img {
                width: 25px;
                height: 25px;
                margin-right: 5px;
            }

            span {
                font-size: 14px;
            }
        }

        .category-item:hover,
        .category-item.active {
            background-color: #9BB83C;
            color: #FFF;
        }
    }

    .right-side {
        flex: 1;

        h2 {
            margin-top: 0;
            font-size: 18px;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
        }

        .ad-item {
            width: 33%;
        }
    }
`