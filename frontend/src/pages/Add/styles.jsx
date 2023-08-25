import styled from "styled-components";


export const AddData = styled.div`
text-align: center;
background-color: #FFF;
width: ${props => (props.isEdit ? 'auto' : '55%')};
margin: ${props => (props.isEdit ? 'auto' : '8rem auto')};
    padding: 1rem;
    border-radius: 2rem;
 @media (max-width: 768px) {
     width: auto;
     margin-top: 3rem;
    }
#text{
    font-size:1.5rem;
    margin-bottom: 1rem;
}
#editText{
    margin-top: 1rem;
    font-size:1.5rem;
}
.itemForm{
    margin:0.5rem;
    input, textarea{
        width: 30rem;
         @media (max-width: 768px) {
            width: 10rem;
    }
    }
}

#btnADD{
    margin-top: 1rem;
    background-color: #5932EA;
    color: #FFF;
    text-transform: capitalize;
    padding: 0.5rem 2rem;
}
`