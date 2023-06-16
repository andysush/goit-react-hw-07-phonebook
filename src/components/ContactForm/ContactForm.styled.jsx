import styled from '@emotion/styled';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  display: flex;
  width: 200px;
  height: 20px;
  font-size: 16px;
  outline-color: rgb(84, 84, 253);
`;

export const AddBtn = styled.button`
  background-color: rgb(84, 84, 253);
  color: #fff;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  border-color: rgb(84, 84, 253);
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
