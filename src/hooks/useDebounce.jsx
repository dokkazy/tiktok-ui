import React from 'react'
import PropTypes from 'prop-types'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    
    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value]);

    return debouncedValue;
}

useDebounce.propTypes = {
    value: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired
}

export default useDebounce