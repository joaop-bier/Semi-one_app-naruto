import { StyleSheet, Text, View, ScrollView } from 'react-native';

type Curso = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
};

const cursos: Curso[] = [
  {
    id: '1',
    titulo: 'Naruto Uzumaki',
    descricao: 'Aprenda sobre o Rasengan, Modo Sábio e o poder da Kurama.',
    imagem: '🍥',
  },
  {
    id: '2',
    titulo: 'Sasuke Uchiha',
    descricao: 'Domine o Sharingan, Chidori e o Susanoo.',
    imagem: '⚡',
  },
  {
    id: '3',
    titulo: 'Kakashi Hatake',
    descricao: 'Conheça o Ninja Copiador e suas técnicas lendárias.',
    imagem: '📖',
  },
  {
    id: '4',
    titulo: 'Itachi Uchiha',
    descricao: 'Descubra o Tsukuyomi, Amaterasu e o Susanoo.',
    imagem: '🦅',
  },
];

export default function TabTwoScreen() {
  return (
    <ScrollView 
      style={s.container} 
      contentContainerStyle={s.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={s.header}>Cursos técnicos NARUTO</Text>

      {cursos.map((item) => (
        <View key={item.id} style={s.card}>

          <Text style={s.cardImage}>
            {item.imagem}
          </Text>

          <View style={s.cardContent}>
            <Text style={s.cardTitle}>
              {item.titulo}
            </Text>

            <Text style={s.cardDesc}>
              {item.descricao}
            </Text>
          </View>

        </View>
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  content: {
    padding: 20,
    paddingBottom: 30,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    padding: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardImage: {
    fontSize: 50,
    marginRight: 15,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  cardDesc: {
    fontSize: 14,
    color: '#555',
  },
});