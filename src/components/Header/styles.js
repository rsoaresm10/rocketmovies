import styled from "styled-components";



export const Container = styled.header`
grid-area: header;
height: 116px;
width: 100%;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

display: flex;
justify-content: space-evenly;
align-items: center;

> h1 {
    color: ${({theme}) => theme.COLORS.PINK};
  padding-right: 100px;
  margin-left: 390px;
}

`;


export const Profile = styled.div`
  display: flex;
align-items: center;
padding-left: 100px;
margin-right: 400px;


> img { //para acessar uma tag dentro de um componente
    width: 56px;
height: 56px;
border-radius: 50%;

}


> div {
    display: flex;
    flex-direction: column;
  line-height: 24px;
  align-items: flex-end;
  margin-right: 10px;
  white-space: nowrap;


  strong {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    line-height: 18px;
    
  }

  span {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.WHITE};
  
    
  }
}
`;