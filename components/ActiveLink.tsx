import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

interface Props {
    text: string;
    href: string;
}

export const ActiveLink:FC<Props> = ({ href, text }) => {
    const activeLinkstyle: CSSProperties = {
        color: "#0070f3",
        textDecoration: "underline",
    };

    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? activeLinkstyle : undefined}>{text}</a>
        </Link>
    );
};
    