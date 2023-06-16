import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const DeleteBtn = styled.button`
  background-color: rgb(84, 84, 253);
  color: #fff;
  outline: none;
  padding: 2px 5px;
  border-radius: 5px;
  border-color: rgb(84, 84, 253);
  font-size: 10px;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgb(233, 184, 25);
    color: rgb(84, 84, 253);
    scale: 1.2;
  }
`;
