import styled from "styled-components";

export const Menu = styled.div`

@media (max-width: 768px) {
      .mobile-menu-button{
        display: block!important;
      }
      .menuDesktop{
        display: none;
      }
    }

    .mobile-menu-button{
        display: none;
      }
width: 15rem;
   .menuVal{
    color: rgb(145, 151, 179);
    text-decoration: none;
    margin: 0.5rem;
    width: 100%;

    border-radius: 1rem;
    padding: 0rem 2rem;

    svg, p{
        display: inline-block;
        vertical-align: middle;
    }
    
   }

   .menuVal:hover{
    background-color: #5932EA;
    color:#FFF;
   }
`