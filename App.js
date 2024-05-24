import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PaginaInicial from './components/PaginaInicial';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';
import Pagina4 from './components/Pagina4';
import Pagina5 from './components/Pagina5';
import styles from './styles';

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Sobre mim':
        return <Pagina1 />;
      case 'Formação e cursos':
        return <Pagina2 />;
      case 'Soft e Hard Skills':
        return <Pagina3 />;
      case 'Projetos':
        return <Pagina4 />;
      case 'Contatos':
        return <Pagina5 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Sobre mim')}>
            <Text style={styles.menuItemText}>Sobre mim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Formação e cursos')}>
            <Text style={styles.menuItemText}>Formação e cursos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Soft e Hard Skills')}>
            <Text style={styles.menuItemText}>Soft e Hard Skills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Projetos')}>
            <Text style={styles.menuItemText}>Projetos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Contatos')}>
            <Text style={styles.menuItemText}>Contatos</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

export default App;