import { useRouter } from "next/router";
import Link from "next/link";

export const ActiveLink = ({ href, text }) => {
    const activeLinkstyle = {
        color: "#0070f3",
        textDecoration: "underline",
    };

    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? activeLinkstyle : null}>{text}</a>
        </Link>
    );
};
    