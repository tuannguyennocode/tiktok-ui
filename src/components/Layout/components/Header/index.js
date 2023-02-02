import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faCloudUpload,
    faMessage,
    faUser,
    faChartLine,
    faVideo,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import HeadlessTippy from '@tippyjs/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import Toggle from '~/components/Toggle';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark Mode',
        toggle: <Toggle />,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Get Coins',
            to: '/getcoin',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View Analysis',
            to: '/viewanalysis',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: '/livestudio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleMenuChange = (item) => {};

    return (
        <header className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok" />
                    </div>
                    <div>
                        <HeadlessTippy
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
                        </HeadlessTippy>
                    </div>
                    <div className={cx('action')}>
                        {currentUser ? (
                            <div className={cx('current-user')}>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>
                                <Tippy content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </button>
                                </Tippy>
                            </div>
                        ) : (
                            <>
                                <Button medium leftIcon=<FontAwesomeIcon icon={faPlus} />>
                                    <font>Upload</font>
                                </Button>
                                <Button primary>
                                    <font>Log in</font>
                                </Button>
                            </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <img
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ba6c8ba9eed06771b9ab7bfb5df5389~c5_100x100.jpeg?x-expires=1675515600&x-signature=NvMQWhyr6vlBiklTInEkfPBEfw0%3D"
                                />
                            ) : (
                                <button className={cx('menu-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
