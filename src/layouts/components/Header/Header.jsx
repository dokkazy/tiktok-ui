import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '@components/Button';
import styles from './Header.module.scss'
import images from '@/assets/images'
import { Menu } from '@components/Popper';
import { InboxIcon, MessageIcon, UploadIcon } from '@components/Icons';
import Search from '@layouts/components/Search';
import { Image } from '@components/Image';
import config from '@configs';
import { MENU_ITEMS, userMenu } from './menuItems';
const cx = classNames.bind(styles)




const Header = () => {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                break;
            default:
                console.log(menuItem);
        }
    }


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}><img src={images.logo} alt="Tiktok" /></Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 10]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 10]} content='Message' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 10]} content='Inbox' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (

                            <Image src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f66a9971d2ad397edd4e8e905e19fb39.jpeg?lk3s=a5d48078&x-expires=1713517200&x-signature=MgoEYYRAvR1CLB9As7bPrd86M8I%3D' className={cx('user-avatar')} alt='Nguyen Van A' fallback='https://pethouse.com.vn/wp-content/uploads/2023/10/cho-corgi.jpg' />

                        ) : (
                            <button className={cx('extra-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header