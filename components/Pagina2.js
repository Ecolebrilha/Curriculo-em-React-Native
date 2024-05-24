import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

const Pagina2 = () => {
  const infoData = {
    academico: `
      ★ EREM CLÓVIS BEVILÁQUA
         2020 - 2022
         Ensino médio completo

      ★ SIMPLIFICA EXCEL EXPRESS
         Fevereiro - 2023
         Certificado de participação

      ★ SENAC PERNAMBUCO
         2023/2025 - Cursando atualmente
         Análise e desenvolvimento de sistemas

      ★ CURSO EM VÍDEO
         Julho - 2023
         HTML5 e CSS3: módulo 1 de 5 [40 HORAS]

      ★ CURSO EM VÍDEO
         Setembro - 2023
         HTML5 e CSS3: módulo 2 de 5 [40 HORAS]

      ★ CURSO EM VÍDEO
         Dezembro - 2023
         HTML5 e CSS3: módulo 3 de 5 [40 HORAS]

      ★ CURSO EM VÍDEO
         Janeiro - 2024
         HTML5 e CSS3: módulo 4 de 5 [40 HORAS]

      ★ CURSO EM VÍDEO
         Março - 2023
         JavaScript [40 HORAS]

      ★ CURSO EM VÍDEO
         Maio - 2023
         Java Básico [40 HORAS]
    `,
  };

  return (
    <ImageBackground source={require('../images/fundo.jpeg')} style={styles.paginaInicial} resizeMode="cover">
      <View style={styles.pagina}>
        <Text style={styles.textoPagina2}>Formação e Cursos</Text>
        <Text style={styles.academico}>{infoData.academico}</Text>
      </View>
    </ImageBackground>
  );
};

export default Pagina2;