import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from "@layouts/components/Header";
import Siderbar from "../components/Sidebar";
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <Siderbar />
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default MainLayout