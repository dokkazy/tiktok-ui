import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '@components/Popper';
import styles from './SuggestedAccounts.module.scss';
import { Image } from '@components/Image';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

const SuggestedAccountItem = ({ data }) => {
    const renderPreview = (attrs) => (
        <div tabIndex={-1} {...attrs}>
            <div>
                <PopperWrapper className={cx('')}>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        </div>
    )
    return (
        <Tippy
            interactive
            delay={[800, 0]}
            render={renderPreview}
            appendTo={() => document.body}
            placement='bottom'
            offset={[-20, 0]}
        >
            <div className={cx('suggested-account-item')}>
                <Image
                    src={data.avatar}
                    alt={data.nickname}
                    className={cx('avatar')}
                    fallback={import.meta.env.VITE_ALTERNATIVE_IMAGE_URL}
                />
                <div className={cx('info')}>
                    <h4 className={cx('username')}>
                        <span>{data.nickname}</span>

                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />}
                    </h4>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </div>
        </Tippy>
    )
}

SuggestedAccountItem.propTypes = {
    data: PropTypes.shape({
        avatar: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        nickname: PropTypes.string,
        tick: PropTypes.bool,
    }).isRequired,
}

export default SuggestedAccountItem