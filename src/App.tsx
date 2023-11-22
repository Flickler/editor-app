import { useSelector } from "react-redux";
import Editor from "./components/Editor";
import Comments from "./components/comments";
import PopUpContainer from "./components/popup";
import * as Style from "./styles";
import { RootState } from "./redux/store";

function App() {
  const popup = useSelector(
    (rootReducer: RootState) => rootReducer.popup.visible
  );
  return (
    <>
      <Style.AppContainer>
        <Style.EditorContainer>
          <Comments />
          <Editor />
        </Style.EditorContainer>
        {popup && <PopUpContainer />}
      </Style.AppContainer>
    </>
  );
}

export default App;
