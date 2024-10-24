import {Outlet, NavLink} from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
    return(
        <>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink to="/" className={styles.navLink}>Home</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/products" className={styles.navLink}>Products</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/categories" className={styles.navLink}>Categories</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/registration" className={styles.navLink}>Registration</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};

export default Layout;