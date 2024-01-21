import pilots from "../pilots.json"
import { PilotsList } from "./PilotsList/PilotsList";
import { IconPlane, Title } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <div>
      <Title $variant="first">Top rated pilots <IconPlane size="40" /></Title>
      <Title $variant="second">Second pilots <IconPlane size="40"/></Title>
      <PilotsList pilots={pilots} />
      <GlobalStyle/>
    </div>
  );
};
