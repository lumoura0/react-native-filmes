import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../../Detalhes';

export default function Filmes({data}) {
    const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={style.card}>
        <Text style={style.titulo}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={style.capa} />

        <View style={style.areaBotao}>
          <TouchableOpacity style={style.botao} onPress={ () => setVisibleModal(true)}>
            <Text style={style.botaoTexto}>Leia Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType='slide' visible={visibleModal}>
        <Detalhes  filme={data} voltar={ () => setVisibleModal(false)}/>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center'
  }
});
