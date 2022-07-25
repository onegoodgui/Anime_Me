import { Bottom, Button, ButtonsContainer, Top } from "./style";

export function CategoriesButtons() {
  return (
    <ButtonsContainer diameter={200}>
      <Top>
        <Button diameter={60} />
      </Top>
      <Bottom>
        <Button diameter={60} />
        <Button diameter={60} />
      </Bottom>
    </ButtonsContainer>
  );
}
