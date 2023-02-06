import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faUser,
    faChartLine,
    faVideo,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Toggle from '~/components/Toggle';
import { MailboxIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../Search';
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

    const handleMenuChange = (item) => {};

    return (
        <header className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <Link to={routesConfig.home}><img src={images.logo} alt="Tiktok" /></Link>
                    </div>
                    <Search/>
                    <div className={cx('action')}>
                        <Button medium leftIcon=<FontAwesomeIcon icon={faPlus} />>
                            <font>Upload</font>
                        </Button>
                        {currentUser ? (
                            <div className={cx('current-user')}>
                                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                    <button className={cx('action-btn', 'message')}>
                                        <MessageIcon width="2.6rem" height="2.6rem" className={cx('message-icon')} />
                                        <div className={cx('notification')}>1</div>
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Mailbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MailboxIcon className={cx('mailbox-icon')} />
                                        <div className={cx('notification')}>2</div>
                                    </button>
                                </Tippy>
                            </div>
                        ) : (
                            <>
                                <Button primary>
                                    <font>Log in</font>
                                </Button>
                            </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ba6c8ba9eed06771b9ab7bfb5df5389~c5_100x100.jpeg?x-expires=1675515600&x-signature=NvMQWhyr6vlBiklTInEkfPBEfw0%3D"
                                    //fallBack = "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1675587600&x-signature=w3vmuRXEmeiVsped%2FAhGKAqYS90%3D"
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
