import React from 'react'
import PropTypes from 'prop-types'
import AccountItem from '@components/AccountItem'

const RenderSearch = ({ searchResult = [] }) => {
    return (
        <>
            {searchResult.map((item) =>
                (<AccountItem key={item.id} data={item} />)
            )}
        </>
    )
}

RenderSearch.propTypes = {
    searchResult: PropTypes.array
}

const MemoizedRenderSearch = React.memo(RenderSearch)
export default MemoizedRenderSearch
