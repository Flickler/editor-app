import { useSelector } from "react-redux";
import { AsideContainer } from "../styles";
import { RootState } from "../redux/store";
import Comment from "./comment";

export default function Comments() {
  const comments = useSelector(
    (rootReducer: RootState) => rootReducer.comments.data
  );
  return (
    <AsideContainer>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </AsideContainer>
  );
}
