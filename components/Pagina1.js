import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

const Pagina1 = () => {
  const infoData = {
    sobre: "Olá, me chamo Fernando Antônio Bastos Leite, tenho 20 anos, moro em Recife-PE e estou iniciando a minha longa jornada de programador Full Stack Júnior, onde eu estou sempre buscando aprender cada vez mais sobre a área de programação e quero continuar desenvolvendo e aprimorando minhas habilidades em Back-end e Front-end.  Sou uma pessoa que está adquirindo conhecimento com constância sobre coisas novas, estou cursando o 3º período do curso superior em análise e desenvolvimento de sistemas na faculdade Senac Pernambuco, através do programa Embarque Digital, em parceria com a Prefeitura do Recife e a empresa Porto digital. Estou em busca de oportunidades de trabalho na área de design UX, desenvolvimento web e desenvolvimento de software, sou apaixonado por tecnologia e pretendo criar diversas soluções incríveis ao decorrer da minha carreira profissional.",
  };

  return (
    <ImageBackground source={require('../images/fundo.jpeg')} style={styles.paginaInicial} resizeMode="cover">
      <View style={styles.pagina}>
        <Text style={styles.textoPagina1}>Sobre mim</Text>
        <Text style={styles.sobre}>{infoData.sobre}</Text>
      </View>
    </ImageBackground>
  );
};

export default Pagina1;