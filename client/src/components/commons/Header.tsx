import type { JSX } from "react";

interface Props {
    children: JSX.Element;
}
export const Header = ({ children }: Props) => {
    return <header>{children}</header>;
};
