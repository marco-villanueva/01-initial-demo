import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
    const menuItems = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "About",
            href: "/about",
        },
        {
            text: "Contact",
            href: "/contact",
        },
        {
            text: "Pricing",
            href: "/pricing",
        },
    ];

    return (
        <nav className={styles["menu-container"]}>
            {menuItems.map((item) => (
                <ActiveLink key={item.text} href={item.href} text={item.text} />
            ))}
        </nav>
    );
};
