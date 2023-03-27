import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import api from './src/services/api';
import Filmes from './src/services/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      //   console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', backgroundColor: '#121210', color: '#FFF', height: 45, paddingTop: 10, fontSize: 18}}>Lista de Filmes</Text>
        <FlatList
          data={filmes}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
