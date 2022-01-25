import styled from "styled-components";

export const Container = styled.button`
  width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: var(--yellow-500);
  color: var(--gray-900);
  font-size: 1.5rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
