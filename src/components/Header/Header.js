import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';
import { COLORS } from '../../constants';
import { QUERIES } from '../../constants';
import { FAMILIES } from '../../constants';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup> 
          </Row>
       </SuperHeader>

          
      
          <MainHeader>
            <WrapperButon>
            <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
            </WrapperButon>
         
          <Logo />
             
        <Left>
          <ButtonWrapper>
            SUBSCRIBETE
          </ButtonWrapper>
          <Link href='/'>Already a Subscriber</Link>
          </Left>
          </MainHeader>

    </header>
  );
};
const Left = styled.div`
display:none;

@media (${QUERIES.laptopAndUp}){
display:revert;
justify-self:end;
align-self: center;
position:relative;
}
`
const ButtonWrapper = styled(Button)`
height:40px;

`

const Link =styled.a`
position:absolute;
width: 100%;
text-align: center;
margin-top:8px;
font-family:${FAMILIES.serif};
font-style: italic;
text-decoration: underline;
font-size:0.85rem;
color:var(--color-gray-900);
`


const WrapperButon=styled.div`
display:none;

@media ${QUERIES.laptopAndUp}{
display:flex;
}


`
const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}){
    display:none;
  
  }
  

`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between; 
  
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;  
  } 
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  

  @${QUERIES.tabletAndUp}{
    margin-top:48px;
    margin-bottom:72px;
  }

  @media (${QUERIES.laptopAndUp}){
  align-items: revert;
  justify-content: revert;
  display:grid;
  grid-template-columns:1fr auto 1fr;
  margin-top:16px;
  margin-bottom:72px;
  
  }
`;




export default Header;
