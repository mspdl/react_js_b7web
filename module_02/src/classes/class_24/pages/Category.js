import React from 'react'
import { useLocation } from 'react-router-dom'

function useQuery() { return new URLSearchParams(useLocation().search) }

function Category() {

    let query = useQuery()
    let category = query.get('categoryName')
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