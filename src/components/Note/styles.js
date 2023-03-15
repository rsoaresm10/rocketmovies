import styled from "styled-components";


export const Container = styled.button`
width: 100%;
background-color:  ${({theme}) => theme.COLORS.BACKGROUND_600};
filter: brightness(0.9);
border: none;
border-radius: 10px;
padding: 32px;
margin-bottom: 16px;

> div {
    display: flex;
    margin-bottom: 15px;
    margin-top: 8px;
}

> h1 {
color: ${({theme}) => theme.COLORS.WHITE};
flex: 1; // para ele ocupar todo espaço dentro da tela disponivel
text-align: left;
font-weight: 700;
font-size: 24px;
}

> p {
color: ${({theme}) => theme.COLORS.GRAY_100};
flex: 1; // para ele ocupar todo espaço dentro da tela disponivel
text-align: left;

}

> footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
}
`;