import styled from "styled-components";


export const Container = styled.div`
width: 100%;

`;

export const Form = styled.form`
max-width: 1140px;
margin: 0 auto;

>  a {
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 40px 0 24px;
        svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
        

    }

    }

   
> header {
    display: flex;
    align-items: center;
    gap: 19px;

     svg {
font-size: 18px;
}



}

.icon {
    color: ${({theme}) => theme.COLORS.PINK};
    display: flex;
    gap: 10px;
    
}
section {
 display: flex;
 gap: 10px;
align-items: center;
margin: 24px 0 40px;


    > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
}

p {
    margin-bottom: 40px;
}
}

p {
    margin-top: 40px;
    font-size: 18px;
    text-align: justify;
}

`;