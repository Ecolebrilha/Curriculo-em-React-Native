import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles';

const Pagina4 = () => {
  const infoData = {
    projects: "https://github.com/Ecolebrilha?tab=repositories",
    github: require('../images/github.jpg')
  };

  const handlePress = () => {
    Linking.openURL(infoData.projects);
  };

  return (
    <ImageBackground source={require('../images/fundo.jpeg')} style={styles.paginaInicial} resizeMode="cover">
      <View style={styles.pagina}>
        <Text style={styles.textoPagina4}>Projetos feitos</Text>
        <Image source={infoData.github} style={styles.github} />
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.projects}>{infoData.projects}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Pagina4;