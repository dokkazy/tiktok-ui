import PropTypes from 'prop-types';
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
const cx = classNames.bind(styles);


import Button from '../../Button'

const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate
    })
    return (
        <Button className={classes} icon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    )
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default MenuItem