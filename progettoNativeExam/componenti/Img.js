import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Img = () => {
  return (
    <Image
      source={require('./accademia.jpg')} // Assicurati che il percorso sia corretto
      style={styles.image}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});

export default Img;
