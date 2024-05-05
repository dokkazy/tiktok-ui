import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import { Image } from '@components/Image';
import Button from '@components/Button';
const cx = classNames.bind(styles);

const AccountPreview = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image
          src={data.avatar}
          alt={data.nickname}
          className={cx('avatar')}
          fallback={import.meta.env.VITE_ALTERNATIVE_IMAGE_URL}
        />
        <Button primary className={cx('follow-btn')}>Follow</Button>
      </div>
      <div className={cx('body')}>
        <h4 className={cx('username')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />}
        </h4>
        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
        <p className={cx('tracking')}>
          <strong className={cx('value')}>{data.followers_count} </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>{data.likes_count} </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  )
}

AccountPreview.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    nickname: PropTypes.string,
    tick: PropTypes.bool,
    followers_count: PropTypes.number,
    likes_count: PropTypes.number,
  }).isRequired,
}

export default AccountPreview