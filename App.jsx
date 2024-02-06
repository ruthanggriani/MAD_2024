import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  
  const App: React.FC = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Halo Selamat Datang!</Text>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/04/45/a2/0445a22656e8cf0f3407b46f81b2e6c6.jpg',
            }}
            style={styles.image}
          />
          <TextInput placeholder="Ketik disini..." style={styles.input} />
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    box: {
      marginBottom: 20,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      // Gradasi warna teks
      color: 'rgba(0, 0, 255, 1)', 
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 8,
    },
  });
  
  export default App;