import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut, faMoon } from '@fortawesome/free-solid-svg-icons'

export const MENU_ITEMS = [
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
                }, {
                    title: 'Japanese',
                    code: 'ja',
                    type: 'language'
                }, {
                    title: 'Korean',
                    code: 'ko',
                    type: 'language'
                }, {
                    title: 'Chinese',
                    code: 'zh',
                    type: 'language'
                }, {
                    title: 'Russian',
                    code: 'ru',
                    type: 'language'
                }, {
                    title: 'Italian',
                    code: 'it',
                    type: 'language'
                }, {
                    title: 'Portuguese',
                    code: 'pt',
                    type: 'language'
                }, {
                    title: 'Dutch',
                    code: 'nl',
                    type: 'language'
                }, {
                    title: 'Arabic',
                    code: 'ar',
                    type: 'language'
                }, {
                    title: 'Turkish',
                    code: 'tr',
                    type: 'language'
                }, {
                    title: 'Thai',
                    code: 'th',
                    type: 'language'
                }, {
                    title: 'Indonesian',
                    code: 'id',
                    type: 'language'
                }, {
                    title: 'Malay',
                    code: 'ms',
                    type: 'language'
                }, {
                    title: 'Filipino',
                    code: 'fil',
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
export const userMenu = [
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