import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

const Pagina3 = () => {
  const infoData = {
    skills: `
      ★ Proatividade                              ★ Liderança

      ★ Compromisso                           ★ Resiliência

      ★ Boa comunicação                    ★ Inteligência emocional

      ★ Criatividade                              ★ Inglês - Médio

      ★ Objetividade                             ★ HTML e CSS - Avançado

      ★ Inovação                                   ★ JavaScript - Médio

      ★ Organização                             ★ Java - Básico

      ★ Flexibilidade                             ★ Python - Básico
    `,
  };

  return (
    <ImageBackground source={require('../images/fundo.jpeg')} style={styles.paginaInicial} resizeMode="cover">
      <View style={styles.pagina}>
        <Text style={styles.textoPagina3}>Soft e Hard Skills</Text>
        <Text style={styles.skills}>{infoData.skills}</Text>
      </View>
    </ImageBackground>
  );
};

export default Pagina3;