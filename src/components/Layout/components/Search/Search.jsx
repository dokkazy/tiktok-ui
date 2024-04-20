import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from "@components/Popper";
import AccountItem from '@components/AccountItem'
import { SearchIcon } from '@/components/Icons';
import handleLogError from '@/utils/handleLogError';

const cx = classNames.bind(styles)

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchInputRef = useRef(null);

    console.log(searchValue);

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        searchInputRef.current.focus();
    }

    const handleHideReuslt = () => {
        setShowResult(false);
    }

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
            }).catch(error => {
                handleLogError(error)
            }).finally(() => {
                setLoading(false)
            })
    }, [searchValue]);

    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                onClickOutside={handleHideReuslt}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((item) =>
                                (<AccountItem key={item.id} data={item} />)
                            )}
                        </PopperWrapper>
                    </div>
                )}

            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos'
                        ref={searchInputRef}
                        spellCheck={false}
                        value={searchValue}
                        onChange={(e) => {
                            e.target.value = e.target.value.trimStart();
                            setSearchValue(e.target.value)
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search