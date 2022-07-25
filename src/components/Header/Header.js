import Logo from "../Logo/Logo";
import { HeaderContainer } from "./style/style";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <HeaderContainer
      display={pathname === "/sign-up" || pathname === "/" ? "none" : "flex"}
    >
      <Logo fontSize={"40px"} />
    </HeaderContainer>
  );
}
