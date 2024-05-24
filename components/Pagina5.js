import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles';

const Pagina5 = () => {
  const infoData = {
    whatsapp: "https://wa.me/+5581985127220",
    instagram: "https://www.instagram.com/fernando_antonio87",
    linkedin: "https://www.linkedin.com/in/fernando-leite-451257271",
    email: "mailto:fernandobastosleite7@gmail.com",
    facebook: "https://www.facebook.com/fernando.leite.52687",
    discord: "https://discord.gg/KqE4DKjh",
    frase: "Uma pessoa que nunca cometeu um erro, nunca tentou nada de novo.",
    autor: "- Albert Einstein",
  };

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground source={require('../images/fundo.jpeg')} style={styles.paginaInicial} resizeMode="cover">
      <View style={styles.pagina}>
        <Text style={styles.textoPagina5}>Contatos</Text>
        <View style={styles.contactsContainer}>
          <TouchableOpacity onPress={() => handlePress(infoData.whatsapp)}>
            <Image source={require('../images/whatsapp.png')} style={styles.contactIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(infoData.instagram)}>
            <Image source={require('../images/instagram.png')} style={styles.contactIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(infoData.email)}>
            <Image source={require('../images/email.png')} style={styles.contactIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(infoData.linkedin)}>
            <Image source={require('../images/linkedin.png')} style={styles.contactIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(infoData.facebook)}>
            <Image source={require('../images/facebook.png')} style={styles.contactIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(infoData.discord)}>
            <Image source={require('../images/discord.png')} style={[styles.contactIcon, styles.lastContactIcon]} />
          </TouchableOpacity>
        </View>
        <Text style={styles.frase}>{infoData.frase}</Text>
        <Text style={styles.autor}>{infoData.autor}</Text>
      </View>
    </ImageBackground>
  );
};

export default Pagina5;