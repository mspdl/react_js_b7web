import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {

    let { category } = useParams()
    let formatedCategory
    switch (category) {
        case 'sports':
            formatedCategory = 'Sports'
            break
        case 'travel':
            formatedCategory = 'Travel'
            break
        case 'news':
            formatedCategory = 'News'
            break
        default:
            formatedCategory = ''
            break
    }

    return <>
        <h4>Category - {formatedCategory}</h4>
    </>

}

export default Category