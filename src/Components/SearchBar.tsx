import { FC } from "react";
import styled from 'styled-components';

interface SearchBarProps {
    setIsSearchOpen: (isOpen: boolean) => void;
}

const SearchMenu = styled.div`
width: 30%;
height: 100vh;
background: #1e213a;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
overflow-y: auto;
`;

const CloseBtn = styled.div`
margin-top: 20px;
margin-right: 53px;
color: white;
font-size: 24px;
cursor: pointer;
text-align: right;
`;

const SearchForm = styled.div`
width: 90%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
align-content: space-between;
margin: auto;
position: relative;
`;

const SearchInput = styled.input`
width: 60%;
margin: 30px 0px;
height: 48px;
background: transparent;
border: 1px solid #e7e7eb;
color: #fff;
padding-left: 25px;
margin-right: 5px;
font-family: Raleway,sans-serif;
font-weight: 500;
font-size: 16px;
`;

const SearchBtn = styled.button`
font-family: Raleway,sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #e7e7eb;
padding: 17px 20px;
background: #3c47e9;
cursor: pointer;
border: none;
`;

const SearchBar: FC<SearchBarProps> = ({ setIsSearchOpen }) => {

    return (
        <SearchMenu>
            <CloseBtn onClick={() => setIsSearchOpen(false)}> x </CloseBtn>
            <SearchForm>
                <SearchInput placeholder="search for places" />
                <SearchBtn>search</SearchBtn>
            </SearchForm>
        </SearchMenu>
    )
}

export default SearchBar;