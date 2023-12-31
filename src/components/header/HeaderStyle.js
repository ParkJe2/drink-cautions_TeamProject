import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const St = {
  Test: styled.div``,

  HeaderContainer: styled.header`
    height: 120px;
    background-color: white;
    border-bottom: solid 1px #969696;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  HeaderLogoImg: styled.img`
    width: auto;
    height: 100px;

    cursor: pointer;
  `,

  CategoryWrapper: styled.div`
    width: 900px;

    justify-content: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
  `,

  CategoryLink: styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 20px;

    margin: 0px 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:hover {
      color: #000;
      font-weight: 700;
    }
    &:focus {
      color: #e24c4b;
      font-weight: 700;
    }
  `
};
