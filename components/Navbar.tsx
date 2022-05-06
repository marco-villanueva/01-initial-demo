import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";
import { FC } from "react";

interface menuItem {
    text: string;
    href: string;
}

interface menuItems extends Array<menuItem>{}

export const Navbar:FC = () => {
    
    const menuItems: menuItems = [
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
