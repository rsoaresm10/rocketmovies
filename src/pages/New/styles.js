import styled from "styled-components";



export const Container = styled.div`
width: 100%;
overflow-y: auto;


`;


export const Form = styled.form`
max-width: 1140px;
margin: 0 auto;
padding-top: 40px;


>  a {
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        align-items: center;
        gap: 5px;
        
    }

    svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
        

    }

> h1 {
    margin-top: 24px;
}
 .input {
    display: flex;
    gap: 40px;
    margin: 30px 0;
}

.tags {
    display: flex;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.HEADER_600};
    opacity: 0.8;
    gap: 24px;
    border-radius: 10px;
    margin-top: 10px;
  

}

.button {
    display: flex;
    gap: 20px;
    
}





`;
