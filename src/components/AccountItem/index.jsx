import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

export const AccountItem = () => {
    return (
        <div>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/500176d816a2704a2b50205f3e96b560.jpeg?lk3s=a5d48078&x-expires=1711555200&x-signature=oS2%2FPQ4%2BhzKCy381gmq2I%2BLJHyg%3D" alt="Name" />
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