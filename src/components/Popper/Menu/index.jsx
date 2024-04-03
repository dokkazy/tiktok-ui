import { Wrapper as PopperWrapper } from '../../Popper'
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind'

import MenuItem from './MenuItem'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) =>
            <MenuItem key={index} data={item} />
        )
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <div>
                        <PopperWrapper className={cx('menu-popper')}>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};

export default Menu