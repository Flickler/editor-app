import { useState } from "react";

import ChevronUpIcon from "../icons/chevron-up";
import { CommentContainer } from "../styles";
import ChevronDownIcon from "../icons/chevron-down";

export default function Comment({
  comment,
}: {
  comment: { title: string; comment?: string };
}) {
  const [details, setDetails] = useState(false);
  const [inputComment, setInputComment] = useState("");

  const handleToggleDetailsClick = () => {
    setDetails(!details);
  };

  return (
    <CommentContainer>
      <div className="heading">
        <h3>{comment.title}</h3>
        <button onClick={handleToggleDetailsClick}>
          {details ? (
            <ChevronDownIcon size={14} />
          ) : (
            <ChevronUpIcon size={14} />
          )}
        </button>
      </div>
      {details && (
        <input
          type="text"
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
          placeholder="Adicione um comentário"
        />
      )}
    </CommentContainer>
  );
}
