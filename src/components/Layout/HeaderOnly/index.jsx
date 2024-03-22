import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from "../components/Header";
import styles from './HeaderOnly.module.scss'

const cx = classNames.bind(styles);

const HeaderOnly = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};


export default HeaderOnly