import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
  min-height: 100dvh;
  background: linear-gradient(
    to right,
    rgb(219, 234, 254),
    rgb(147, 197, 253),
    rgb(59, 130, 246)
  );
`;

export const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  background-color: #fff;
  border-radius: 0.5rem;
  min-height: calc(100dvh - 4rem);
  width: 100%;
  overflow: hidden;

  .editor {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 3rem 2rem;
    max-width: 800px;
    outline: none;
  }

  .bubble {
    display: flex;

    button {
      background-color: #fff;
      border: 1px solid #f2f2f2;
    }
  }
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: #f6f6f6;
  border-radius: 0.25rem;
`;

export const CommentContainer = styled.div`
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  .heading {
    display: flex;
    justify-content: space-between;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;
