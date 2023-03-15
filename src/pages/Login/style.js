import styled from "styled-components";
import homePng from '../../assets/home.png'


export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: 640px auto;
grid-template-areas: "login  img";
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
margin: 235px auto;
grid-area: login;
text-align: left;
max-width: 340px;


> h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-weight: 700;
font-size: 48px;
line-height: 63px;

}

> p {
    margin-bottom: 48px;
    color: ${({theme}) => theme.COLORS.GRAY_200};

}

> h2 {
    margin-bottom: 48px;

}

> a {
text-align: center;
margin-top: 42px;
color: ${({theme}) => theme.COLORS.PINK};

}
`;


export const But =  styled.div`
margin-top: 24px;
color: ${({theme}) => theme.COLORS.BACKGROUND_800};


`;


export const Image = styled.div`
background: url(${homePng}) no-repeat center center;
flex: 1;
grid-area: img;
background-size: cover;
opacity: 0.8;

`;



