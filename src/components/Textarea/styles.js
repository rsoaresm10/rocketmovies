import styled from "styled-components"; 


export const Container = styled.textarea `
width: 100%;
height: 250px;
border: none;
resize: none;// para que não consiga aumentar o tamanho da caixa 
background-color:  ${({theme}) => theme.COLORS.BACKGROUND_600};
filter: brightness(0.9);
color: ${({ theme }) => theme.COLORS.GRAY_300};
margin-bottom: 8px;
border-radius: 10px;
padding: 16px;




&::placeholder {
    
color: ${({ theme }) => theme.COLORS.GRAY_100};
   

}




> svg {
    margin-left: 16px;
}

`;