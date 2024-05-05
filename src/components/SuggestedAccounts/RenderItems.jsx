import React from 'react'
import PropTypes from 'prop-types'
import SuggestedAccountItem from './SuggestedAccountItem'

const RenderItems = ({ data = [] }) => {
    return (
        <>
            {data.map((account) =>
                (<SuggestedAccountItem key={account.id} data={account} />)
            )}
        </>
    )
}
RenderItems.propTypes = {
    data: PropTypes.array
}

const MemoizedRenderItems = React.memo(RenderItems)
export default MemoizedRenderItems
