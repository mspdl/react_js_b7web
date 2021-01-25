import styled from 'styled-components'

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props => props.height || 20}px;
`

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .box {
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;
    }
    
    .box-padding {
        padding: 10px;
    }

    .left-side {
        flex: 1;
        margin-right: 20px;

        .box {
            display: flex;
        }

        .ad-image {
            width: 320px;
            height: 320px;
            margin-right: 20px;

            .each-slide img {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }

        .ad-info {
            flex: 1;

            .ad-name {
                margin-bottom: 20px;

                h2 {
                    margin: 0;
                    margin-top: 20px;
                }

                small {
                    color: #999;
                }
            }

            .ad-description {
                small {
                    color: #999;
                }
            }

        }
    }

    .right-side {

        .price span{
            color: #0000FF;
            display: block;
            font-size: 27px;
            font-weight: bold;
        }

        .contact-seller-link {
            background-color: #0000FF;
            color: #FFF;
            height: 30px;
            border-radius: 5px;
            box-shadow: 0px 0px 4px #999;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            margin-bottom: 20px;
        }

        small {
            display: block;
            color: #999;
            margin-top: 10px;
        }
    }

    @media(max-width: 600px) {

        & {
            flex-direction: column;
        }

        .left-side {
            margin: 0;

            .box {
                width: 320px;
                flex-direction: column;
                margin: auto;

                .ad-info {
                    padding: 10px;
                }
            }

        }

        .right-side {
            width: auto;
            margin-top: 20px;

            .box {
                width: 320px;
                margin: auto;
            }

            .contact-seller-link {
                width: 320px;
                margin: 20px auto;
            }
        }
    }
`

export const OthersArea = styled.div`
    h2 {
        font-size: 20px;
    }
    
    .list {
        display: flex;
        flex-wrap: wrap;

        .ad-item {
            width: 25%;
        }
    }

    @media(max-width: 600px) {
        & {
            margin: 10px;
        }

        .list .ad-item {
            width: 50%;
        }
    }
`

export const BreadCrumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a {
        display: inline-block;
        margin: 0px 5px;
        text-decoration: underline;
    }

    @media(max-width: 600px) {
        & {
            margin: 20px;
        }
    }
`