import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('info')}>
                <span className={cx('name')}>
                    <font>{data.nickname}</font>
                    {data.tick && (
                        <i>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </i>
                    )}
                </span>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
