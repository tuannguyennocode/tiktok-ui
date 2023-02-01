import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({name}) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_300x300.webp?x-expires=1675130400&x-signature=f6O3PNWJjY6TKob2Bp86Fvhx7eE%3D"
                alt="Theanh28"
            />
            <div className={cx('info')}>
                <span className={cx('name')}>
                    <font>{name}</font>
                    <i><FontAwesomeIcon icon={faCheckCircle} /></i>
                </span>
                <span className={cx('username')}></span>
            </div>
        </div>
    );
}

export default AccountItem;
