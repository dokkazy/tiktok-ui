import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
const cx = classNames.bind(styles);

import PropTypes from 'prop-types';

Button.propTypes = {
    to: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    href: PropTypes.string,
    large: PropTypes.bool,
    text: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
};

function Button({ to, href,
    primary, outline, text, disabled, rounded,
    small, large,
    children,
    className,
    icon,
    onClick,
    ...props }) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...props
    }
    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(_props).forEach(key => {
            if (key.startsWith('on') && typeof _props[key] === 'function') delete _props[key];
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary, outline, text, disabled, rounded, small, large, [className]: className
    });
    return (
        <Comp className={classes} {..._props}>
            <span className={cx('icon')}> {icon}</span>
            <span className={cx('title')}>{children}</span>
        </Comp>
    )
}



export default Button