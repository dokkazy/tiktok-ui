import PropTypes from 'prop-types';
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
const cx = classNames.bind(styles);


import Button from '../../Button'

const MenuItem = ({ data }) => {
    return (
        <Button className={cx('menu-item')} icon={data.icon} to={data.to}>
            {data.title}
        </Button>
    )
}

MenuItem.propTypes = {
    data: PropTypes.object
};

export default MenuItem