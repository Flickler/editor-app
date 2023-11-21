import Editor from "./components/Editor";
import Comments from "./components/comments";
import * as Style from "./styles";

function App() {
  return (
    <>
      <Style.AppContainer>
        <Style.EditorContainer>
          <Comments />
          <Editor />
        </Style.EditorContainer>
      </Style.AppContainer>
    </>
  );
}

export default App;
