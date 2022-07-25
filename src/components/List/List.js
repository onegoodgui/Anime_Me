import { ListDiv, ScrollContainer } from "./style/style.js";
import { forwardRef } from "react";

export const List = forwardRef(({ children, title }, ref) => (
  <ListDiv ref={ref}>
    <h1>{title}</h1>
    <ScrollContainer>{children}</ScrollContainer>
  </ListDiv>
));
