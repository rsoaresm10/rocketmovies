import styled from "styled-components";


export const Container = styled.div`
width: 100%;
display: grid;
grid-template-rows: 116px auto;
grid-template-areas: 
"header"
"content";
> main {
    grid-area: content;
  

}


`;

export const Form = styled.form`
max-width: 1140px;
margin: 47px auto;
overflow-y: auto;


> header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    
}
`;


export const NewMovie = styled.button `
width: 207px;
height: 48px;
background-color: ${({theme}) => theme.COLORS.PINK};
align-items: center;
display: flex;
justify-content: center;
gap: 7px;



`;

