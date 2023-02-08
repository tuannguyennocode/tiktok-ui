import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    // Đầu tiên initstate nhận vào là 1 array chứa 1 object (trong object có 1 property key = data & value = items(MENU_ITEMS)).
    // Khi này history có giá trị của initstate
    const [history, setHistory] = useState([{ data: items }]);
    //Gán biến current = phần tử cuối cùng của history ({ data: items }) => current là 1 object && current.data = items(MENU_ITEMS)
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            // Gán biến isParent = dạng boolean của item.children
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        //Nếu item có property là children thì setHistory thêm 1 object là item.children
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                        //Khi onclick sẽ render lại component và history sẽ có 2 phần tử
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            hideOnClick={hideOnClick}
            offset={[20, 6]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
