import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const St = {
  CategoryHeader: styled.div`
    width: 90%;
    height: 120px;
    background-color: #545b77;
    border-radius: 8px;
    margin: 20px auto;
    padding-left: 50px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
  `,
  CategotyTitle: styled.div`
    color: white;
    font-size: 26px;
    font-weight: bold;
  `,
  CategorySubTitle: styled.div`
    color: whitesmoke;
    font-size: 18px;
    padding-left: 10px;
  `,
  WriteBtn: styled(Link)`
    color: white;
    background-color: #e24c4b;
    width: 20%;
    height: 45px;
    border-radius: 8px;
    margin: 40px auto 50px auto;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration-line: none;
  `,
  PostListWrap: styled.div`
    width: 100%;
    height: 100%;
  `,
  PostList: styled(Link)`
    width: 88%;
    height: 60px;
    border-radius: 8px;
    padding: 10px;
    margin: 10px auto 18px auto;
    display: flex;
    align-items: center;
    background-color: white;
    cursor: pointer;
    text-decoration-line: none;
    color: black;
    word-break: break-all;
  `,
  PostTime: styled.div`
    font-size: 13px;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
  `,
  PostTitle: styled.div`
    font-size: 18px;
    font-weight: 700;
    width: 70%;
  `,
  PostRight: styled.div`
    display: flex;
    align-items: center;
  `,
  Postlike: styled.div`
    font-size: 20px;
    color: red;
  `,
  PostUser: styled.div``,
  ListLikeBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  `,
  ListProfileImgBox: styled.div`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid #e24c4b;
    overflow: hidden;
    margin: auto 10px;
  `,
  ListProfileImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateZ(0);
    backface-visibility: hidden;
    image-rendering: -webkit-optimize-contrast;
  `
};
