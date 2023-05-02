import React from "react";
import { useState } from "react";
import {
  ButtonContainerStyled,
  CardTodoStyled,
  InputContainerStyled,
  StyledHero,
  TodoListContainerStyled,
} from "./HeroStyled";

function Hero() {
  //Maneja el estado del input
  const [inputValue, setInputValue] = useState("");
  function InputChange(event) {
    setInputValue(event.target.value);
  }
  //Maneja el estado de la lista de cards
  const [cardList, setCardList] = useState([]);
  function AddCard() {
    setCardList([
      ...cardList,
      <CardTodoStyled key={cardList.length}>
        {inputValue}
        <i class="fa-solid fa-trash"></i>
      </CardTodoStyled>,
    ]);
  }

  const removeAllCards = () => {
    setCardList([]);
  };

  return (
    <StyledHero>
      <h1>Todo List</h1>
      <InputContainerStyled>
        <input
          value={inputValue}
          onChange={InputChange}
          type="text"
          placeholder="Ingrese lo que desea guardar"
        />
      </InputContainerStyled>
      <ButtonContainerStyled>
        <button onClick={AddCard} type="submit">
          Guardar
        </button>
        <button onClick={removeAllCards} type="submit">
          Borrar todo
        </button>
      </ButtonContainerStyled>
      <TodoListContainerStyled>
        {cardList.map((card) => card)}
      </TodoListContainerStyled>
    </StyledHero>
  );
}

export default Hero;
