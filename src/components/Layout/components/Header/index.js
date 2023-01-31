import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok" />
                    </div>
                    <div>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('search-title')}>Account</h4>
                                        <AccountItem name="theanh28entertainment" />
                                        <AccountItem name="theanh28entertainment" />
                                        <AccountItem name="theanh28entertainment" />
                                        <AccountItem name="theanh28entertainment" />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('search')}>
                                <input
                                    className={cx('search-input')}
                                    placeholder="Search accounts and videos"
                                    spellCheck={false}
                                />
                                <button className={cx('clear')}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                                <div className={cx('splitter')}></div>

                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </Tippy>
                    </div>
                    <div className={cx('action')}>
                        <Button medium>
                            <FontAwesomeIcon icon={faPlus} />
                            <font>Upload</font>
                        </Button>
                        <Button primary>
                          <font>Login</font>
                        </Button>
                        <FontAwesomeIcon className={cx('menu')} icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
