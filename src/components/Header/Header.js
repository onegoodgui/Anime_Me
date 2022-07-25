import Logo from "../Logo/Logo.js";
import { HeaderContainer } from "./style/style.js";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderContainer
      display={pathname === "/sign-up" || pathname === "/" ? "none" : "flex"}
    >
      <Logo fontSize={"40px"} />
    </HeaderContainer>
  );
}
