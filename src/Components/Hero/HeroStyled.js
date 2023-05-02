import styled from "styled-components";
export const StyledHero = styled.div`
  background-color: #ccc;
  height: 100vh;
  width: 100vw;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const InputContainerStyled = styled.div`
  width: 80%;
  height: 50px;

  input {
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    text-align: center;
    width: 70%;
    height: 90%;
  }
`;

export const ButtonContainerStyled = styled.div`
  width: 50%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  gap: 20px;
  button {
    width: 50%;
    height: 100%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

export const TodoListContainerStyled = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  background-color: #123456;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin-top: 20px;
`;

export const CardTodoStyled = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  background-color: #000;
  border-radius: 5px;
  margin-top: 10px;
  color: #fff;

  padding: 0 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;
