import type { JSX } from "react";

interface Props {
    children: JSX.Element;
}

export const Navbar = ({ children }: Props) => {
    return <nav>{children}</nav>;
};
