import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut, faMoon } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '@components/Button';
import styles from './Header.module.scss'
import images from '@/assets/images'
import { Menu } from '@components/Popper';
import { InboxIcon, MessageIcon, UploadIcon } from '@/components/Icons';
import { Search } from '@components/Layout/components/Search';
import {Image} from '@/components/Image';
const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'English',
                    code: 'en',
                    type: 'language'
                }, {
                    title: 'Spanish',
                    code: 'es',
                    type: 'language'
                }, {
                    title: 'French',
                    code: 'fr',
                    type: 'language'
                }, {
                    title: 'German',
                    code: 'de',
                    type: 'language'
                }, {
                    title: 'Tiếng Việt',
                    code: 'vi',
                    type: 'language'
                }

            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]


const Header = () => {
    const currentUser = true;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // });

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                break;
            default:
                console.log(menuItem);
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/huy'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
            isDarkMode: true
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
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

                            <Image src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f66a9971d2ad397edd4e8e905e19fb39.jpeg?lk3s=a5d48078&x-expires=1713517200&x-signature=MgoEYYRAvR1CLB9As7bPrd86M8I%3D' className={cx('user-avatar')} alt='Nguyen Van A' fallback='https://pethouse.com.vn/wp-content/uploads/2023/10/cho-corgi.jpg'/>

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