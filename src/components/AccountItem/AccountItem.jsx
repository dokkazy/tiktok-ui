import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import { Image } from '@components/Image';

const cx = classNames.bind(styles);

export const AccountItem = ({ data }) => {
    return (
            <Link  to={`/@${data.nickname}`} className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.full_name}
                    fallback='https://pethouse.com.vn/wp-content/uploads/2023/10/cho-corgi.jpg'
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />}

                    </h4>
                    <span className={cx('username')}>{data.full_name}</span>
                </div>
            </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.shape({
        avatar: PropTypes.string,
        full_name: PropTypes.string,
        nickname: PropTypes.string,
        tick: PropTypes.bool,
    }).isRequired,
};

export default AccountItem;