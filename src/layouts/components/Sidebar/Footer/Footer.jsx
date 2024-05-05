import classNames from 'classnames/bind'

import styles from './Footer.module.scss'
const cx = classNames.bind(styles)
const Footer = () => {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" alt="eh-background" className={cx('image')} />
                <div className={cx('reward')}>
                    <div className={cx('reward-block')}>
                        <h4 className={cx('reward-title')}>
                            Create TikTok effects, get a reward
                        </h4>
                    </div>
                </div>
            </div>
            <h4 className={cx('title')}>Company</h4>
            <div className={cx('navigation')}>
                <a className={cx('nav-link')}>About</a>
                <a className={cx('nav-link')}>Newsroom</a>
                <a className={cx('nav-link')}>Contact</a>
                <a className={cx('nav-link')}>Careers</a>
            </div>
            <h4 className={cx('title')}>Program</h4>
            <div className={cx('navigation')}>
                <a className={cx('nav-link')}>TikTok for Good</a>
                <a className={cx('nav-link')}>Advertise</a>
                <a className={cx('nav-link')}>TikTok LIVE Creator Networks</a>
                <a className={cx('nav-link')}>Developers</a>
                <a className={cx('nav-link')}>Transparency</a>
                <a className={cx('nav-link')}>TikTok Rewards</a>
                <a className={cx('nav-link')}>TikTok Embeds</a>
            </div>
            <h4 className={cx('title')}>Terms & Policies</h4>
            <div className={cx('navigation')}>
                <a className={cx('nav-link')}>Help</a>
                <a className={cx('nav-link')}>Safety</a>
                <a className={cx('nav-link')}>Terms</a>
                <a className={cx('nav-link')}>Privacy Policy</a>
                <a className={cx('nav-link')}>Privacy Center</a>
                <a className={cx('nav-link')}>Creator Academy</a>
                <a className={cx('nav-link')}>Community Guidelines</a>
            </div>
            <h4 className={cx('title')}>Channels</h4>
            <div className={cx('navigation')}>
                <a className={cx('nav-link')}>Dance</a>
                <a className={cx('nav-link')}>Arts</a>
                <a className={cx('nav-link')}>Food and Drink</a>
                <a className={cx('nav-link')}>Tourism</a>
                <a className={cx('nav-link')}>Production and Manufacturing</a>
                <a className={cx('nav-link')}>Vehicles and Transportation</a>
                <a className={cx('nav-link')}>Relationship</a>
                <a className={cx('nav-link')}>TikTok Style</a>
                <a className={cx('nav-link')}>Athletics</a>
                <a className={cx('nav-link')}>Hobbies</a>
            </div>
            <span className={cx('copyright')}>© {new Date().getFullYear()} TikTok</span>
        </footer>
    )
}
export default Footer