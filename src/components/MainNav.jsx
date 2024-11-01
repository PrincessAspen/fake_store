import {NavLink, useNavigate} from 'react-router-dom';
import styles from './MainNav.module.css';
import { useAuth } from '../AuthContext'
import CartNotifier from './CartNotifier';

const Layout = () => {
    const {user, token, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const {error} = await logout();
        if (!error) {
            return navigate('/login')
        }
    }
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
                    {user && token ? (
                        <>
                        <li>
                            <button type="button" onClick={handleLogout} className={styles.navLink}>Logout</button>
                        </li>
                        </>
                    ) : (
                        <>
                            <li className={styles.navItem}>
                                <NavLink to="/registration" className={styles.navLink}>Registration</NavLink>
                            </li>
                            <li className={styles.navItem}>
                                <NavLink to="/login" className={styles.navLink}>Log in</NavLink>
                            </li>
                        </>
                    )}
                <li className={styles.navItem}>
                    <CartNotifier/>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/dashboard" className={styles.navLink}>Dashboard</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
};

export default Layout;