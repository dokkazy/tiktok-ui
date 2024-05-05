import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, LiveActiveIcon, UserGroupActiveIcon } from '@components/Icons';
import SuggestedAccounts from '@components/SuggestedAccounts';
import config from '@configs';
import Footer from './Footer';
import Button from '@/components/Button';


const cx = classNames.bind(styles);



const Sidebar = () => {
    const [currentUser, setCurrentUser] = useState(false);


    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Menu>
                    <MenuItem title='For You' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                    <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                </Menu>

                {!currentUser ? (
                    <div className={cx('separate')}>
                        <div className={cx('login')}>
                            <p className={cx('login-title')}>Log in to follow creators, like videos, and view comments.</p>
                            <Button outline className={cx('login-btn')}>Log in</Button>
                        </div>
                    </div>

                ) : (
                    <>
                        <div className={cx('separate')}>
                            <SuggestedAccounts label='Suggested Accounts' type='suggested' />
                        </div>
                        <div className={cx('separate')}>
                            <SuggestedAccounts label='Following Accounts' type='following' />
                        </div>
                    </>
                )}
                <div className={cx('separate')}>
                    <Footer />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar