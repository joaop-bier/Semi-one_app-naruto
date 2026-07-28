import { router } from 'expo-router';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={s.container}>
      <Image source={require('../../assets/naruto_91.jpg')} style={s.image} resizeMode='cover'/>

      <View style={s.content}>
        <Text style={s.title}>SENAI NARUTO</Text>

        <Text style={s.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusantium aliquid consectetur alias impedit pariatur sapiente nesciunt necessitatibus expedita cumque non nostrum, distinctio minima dignissimos similique in! Quaerat, mollitia minus.
        </Text>

        <TouchableOpacity style={s.button} onPress={() => router.push('/explore')}>
          <Text style={s.buttonText}>Lista de cursos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  image:{
    width: '100%',
    height: 220
  },
  content:{
    padding: 20
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12
  },
  paragraph:{
    fontSize: 16,
    lineHeight: 22,
    color: '#1a1a1a',
    marginBottom: 30
  },
  buttonText:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20
  },
  button:{
    backgroundColor: '#004a94',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-end'
  }
});
