import { useState } from "react";

import { useDispatch } from "react-redux";
import { addComment } from "../redux/commentSlice";
import { closeModal } from "../redux/popupSlice";

import { Mask, PopUp } from "../styles";
import CloseIcon from "../icons/close";

export default function PopUpContainer() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fakeId, setFakeId] = useState(1);

  const handleCloseClick = () => {
    dispatch(closeModal());
  };

  const handleSubmitClick = () => {
    dispatch(addComment({ id: fakeId, title: title, comment: description }));
    setFakeId(fakeId + 1);
    setTitle("");
    setDescription("");
    handleCloseClick();
  };

  return (
    <Mask>
      <PopUp>
        <div className="heading">
          <h3>Adicione um comentário</h3>
          <CloseIcon size={24} onClick={handleCloseClick} />
        </div>
        <div>
          <div className="group">
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              placeholder="Digite um titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="group">
            <label htmlFor="description">Descrição</label>
            <textarea
              placeholder="Digite uma descrição para o comentário"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button onClick={handleSubmitClick}>Comentar</button>
        </div>
      </PopUp>
    </Mask>
  );
}
