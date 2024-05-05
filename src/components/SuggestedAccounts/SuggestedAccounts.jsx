import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import MemoizedRenderItems from './RenderItems';
import { getFollowingUsers, getSuggestedUsers } from '@/api/users/usersApi';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

const SuggestedAccounts = ({ label, type }) => {
    // const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    const fetchApi = async () => {
        if (type === 'suggested') {
            const res = await getSuggestedUsers(INIT_PAGE, PER_PAGE);
            setSuggestedUsers(res);
        } else {
            const res = await getFollowingUsers(INIT_PAGE);
            setSuggestedUsers(res);
        }
    }

    useEffect(() => {
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>
                {label}
            </p>
            <MemoizedRenderItems data={suggestedUsers}/>
            <p className={cx('see-all')}>
                See more
            </p>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    type: PropTypes.string
}

export default SuggestedAccounts