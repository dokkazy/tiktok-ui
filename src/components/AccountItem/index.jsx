import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

export const AccountItem = () => {
    return (
        <div>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f66a9971d2ad397edd4e8e905e19fb39.jpeg?lk3s=a5d48078&x-expires=1711818000&x-signature=o0B02V9NlA%2B6%2Bu4GcsWbbQ4jU3s%3D" alt="Name" />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span> Nguyen Van A</span>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />
                    </h4>
                    <span className={cx('username')}>nguyenvana</span>
                </div>
            </div>
        </div>
    );
};

export default AccountItem;