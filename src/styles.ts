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
    max-width: 700px;
    outline: none;
  }

  .bubble {
    display: flex;
  }
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
`;
