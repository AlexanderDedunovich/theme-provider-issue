import { withTheme } from "theme";
import * as S from "./styled";

const App = (): JSX.Element => {
  return (
    <S.Header>
      <S.Title>TITLE</S.Title>
    </S.Header>
  );
};

export default withTheme(App);
