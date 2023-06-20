import { Outlet, Link } from "react-router-dom";
import style from './style.module.css';
import CssBaseLayout from './css';

function RootLayout({ children }) {
    return (
        <CssBaseLayout>
            <div className={style.rootLayoutLinks}>
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/fake">Not found</Link>
            </div>
            <Outlet />
            {children}
        </CssBaseLayout>
    );
}

export default RootLayout;
