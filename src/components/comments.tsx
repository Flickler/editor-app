import { useSelector } from "react-redux";
import { AsideContainer } from "../styles";
import { RootState } from "../redux/store";
import Comment from "./comment";

export default function Comments() {
  const comments = useSelector(
    (rootReducer: RootState) => rootReducer.comments.data
  );
  let fakeId = 0;
  return (
    <AsideContainer>
      {comments.map((comment) => {
        fakeId++;
        return <Comment key={fakeId} comment={comment} />;
      })}
    </AsideContainer>
  );
}
