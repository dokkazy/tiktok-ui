import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];


    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //chọc vào để lấy ra children nếu có, !! để chuyển thành boolean
            return (
                <MenuItem key={index} data={item} onClick={() => {
                    {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }
                }} />
            )
        }
        )
    }

    const handleBackHistory = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <div>
                <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <Header title={current.title} onBack={handleBackHistory} />}
                    <div className={cx('menu-scrollable')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        </div>
    )

    const handleResetToFirstMenu = () => setHistory(prev => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]}
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetToFirstMenu}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default Menu