import styled from "styled-components";

export const Item = styled.div`
text-align: center;


#ListUser{
    width: 50%;
    margin: 0.5rem auto;
    @media (max-width: 768px) {
     width: auto;
    }
}

#delete{
    path{
        fill: rgb(241, 24, 24)
    }
}



.titleItem{
    font-size:1.1rem;
    color: #000;
    font-weight: bold;
    text-align: left;
    display: inline-block;
}

 #ListUser{
    background-color: rgb(255, 255, 255);
    margin-top: 8rem;
    border-radius: 2rem;
    overflow: hidden;
    padding: 3rem;
    @media (max-width: 768px) {
     padding: 1rem;
     margin-top: 3rem;
    }
}
#btnOPT{
    border: none;
    background: transparent;
    margin: 0rem 1rem;
    cursor: pointer;
}
#action{
    text-align: center;
}
.inputSearch{
    display: inline-block;
    margin-left: 1rem;
    background: #F9FBFF;
    border: none;
    padding: 0.5rem;
    border-radius: 1rem;
    svg{
        path{
            fill: #B5B7C0;
        }
    }
    input{
        border: none;
        background: #F9FBFF;
        vertical-align: super;

    }
    input:focus {
    outline: none
    }
}

.titleTableItem{
    color: #B5B7C0;
    font-weight: bold;
}
.rowItem:hover{
    background-color: rgb(89 50 234 / 26%);
    color: #FFF!important;
}
.titleBodyItem{
    color:rgb(0 0 0 / 51%);
    cursor:pointer;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgb(89 50 234 / 26%);
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: rgb(89 50 234 / 26%);
}

*::-webkit-scrollbar-thumb {
  background-color: #6565b8;
  border-radius: 5px;
  border: 3px solid  #6565b8;
}
`