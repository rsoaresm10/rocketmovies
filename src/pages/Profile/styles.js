import styled from "styled-components";


export const Container = styled.div`
width: 100%;

> header {
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    padding: 0 124px;
    background: rgba(255, 133, 155, 0.05);
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    a {
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        align-items: center;
        
    }

    svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 5px;
        

    }

}

`;

export const Form = styled.div`
max-width: 340px;
margin: 30px auto 0;
> div:nth-child(4) {
    margin-top: 24px;
}


`;

export const Avatar = styled.div`
position: relative;
margin: -124px auto 50px; // VAI FAZER COM QUE A IMAGEM SUBA 
width: 186px;
height: 186px;


> img {
    border-radius: 50%;
    width: 186px;
height: 186px;
}

> label {
    width: 48px;
    height: 48px;
    background-color:  ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    svg {
width: 20px;
height: 20px;
color:  ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

    input {
        display: none;
    }
}
`;