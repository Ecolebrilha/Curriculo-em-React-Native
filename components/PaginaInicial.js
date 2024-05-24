import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from '../styles';

const PaginaInicial = () => {
  const userData = {
    nome: "Fernando Leite",
    cargo: "Desenvolvedor Full Stack Júnior",
    foto: require('../images/foto.png')
  };

  return (
    <ImageBackground source={require('../images/fundo.jpeg')} style={styles.paginaInicial} resizeMode="cover">
      <View style={styles.paginaInicial}>
        <Image source={userData.foto} style={styles.foto} />
        <Text style={styles.nome}>{userData.nome}</Text>
        <Text style={styles.info}>{userData.cargo}</Text>
      </View>
    </ImageBackground>
  );
};

export default PaginaInicial;