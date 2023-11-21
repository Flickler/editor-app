import Editor from "./components/Editor";
import * as Style from "./styles";

function App() {
  return (
    <>
      <Style.AppContainer>
        <Style.EditorContainer>
          <Style.AsideContainer />
          <Editor />
        </Style.EditorContainer>
      </Style.AppContainer>
    </>
  );
}

export default App;
