import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import images from '@/assets/images'
import styles from './Image.module.scss'

const cx = classNames.bind(styles)

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback)
    }
    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError} />
    )
})
Image.displayName = 'Image'

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
    // Add other prop validations here if needed
}

export default Image