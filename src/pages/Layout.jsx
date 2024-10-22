import {Outlet, Link} from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
    return(
        <>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/products" className={styles.navLink}>Products</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/categories" className={styles.navLink}>Categories</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};

export default Layout;