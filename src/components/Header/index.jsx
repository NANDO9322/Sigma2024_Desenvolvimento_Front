import React, { useState } from 'react';
import { SearchBarContainer, Logo, SearchInputContainer, SearchInput, SearchIcon, LoginIcon } from './style'; // Importando os estilos do componente
import PesquisarIcon from '../../assets/search-normal.svg';
import LogoImage from '../../assets/logo.svg';
import LoginIconImage from '../../assets/logar.svg';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <Logo src={LogoImage} alt="Logo" />
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon src={PesquisarIcon} alt="Pesquisar" />
      </SearchInputContainer>
      <LoginIcon src={LoginIconImage} alt="Logar" />
    </SearchBarContainer>
  );
};

export default Header;
