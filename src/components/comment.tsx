import { useState } from "react";

import { useDispatch } from "react-redux";
import { removeComment } from "../redux/commentSlice";

import { CommentContainer } from "../styles";
import DeleteIcon from "../icons/delete";
import ChevronUpIcon from "../icons/chevron-up";
import ChevronDownIcon from "../icons/chevron-down";

export default function Comment({
  comment,
}: {
  comment: { id: number; title: string; comment?: string };
}) {
  const dispatch = useDispatch();
  const [details, setDetails] = useState(false);

  const handleToggleDetailsClick = () => {
    setDetails(!details);
  };

  const handleDeleteClick = () => {
    dispatch(removeComment(comment.id));
  };

  return (
    <CommentContainer>
      <div className="heading">
        <h3>{comment.title}</h3>
        <div className="actions">
          <button onClick={handleDeleteClick}>
            <DeleteIcon size={12} />
          </button>
          <button onClick={handleToggleDetailsClick}>
            {details ? (
              <ChevronDownIcon size={12} />
            ) : (
              <ChevronUpIcon size={12} />
            )}
          </button>
        </div>
      </div>
      {details && <p className="description">{comment.comment}</p>}
    </CommentContainer>
  );
}
