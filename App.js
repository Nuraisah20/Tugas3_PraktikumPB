import React, { useState } from 'react';
import {SafeAreaView, ScrollView, View, Text, TextInput, Image, Button, FlatList, StyleSheet,} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { key: '1', name: '', price: 'Rp. 5.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t5lD19PstmEh0hQdVxOWfC7CNPpjl90KeQ&s' },
    { key: '2', name: 'Item 2', price: 'Rp. 6.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZ3Re8h_Nfihm1iVWWnf2Rc4pjthmnFTBqg&s' },
    { key: '3', name: 'Item 3', price: 'Rp. 30.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpC46H_QFsGVs1aAjoIfCy2Pj-a5MDgNxBg&s' },
    { key: '4', name: 'Item 4', price: 'Rp. 15.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3DZ-dv1y_0ZgQQc8GYUgTdUx7JRJBZ6Crw&s' },
    { key: '5', name: 'Item 5', price: 'Rp. 4.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuqxC4j6878W3eGd80spH7FpHwh9bCFAQOQ&s' },
    { key: '6', name: 'Item 1', price: 'Rp. 5.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYPVjRig45NRGIpSWBGi4c6jPxJ8TmmuJdw&s' },
    { key: '7', name: 'Item 2', price: 'Rp. 6.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0qnsSLGCsjQvfH-1a0-8A_68-DNi9VW1rg&s' },
    { key: '8', name: 'Item 3', price: 'Rp. 30.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqerguZUX7MpNHrTLRau1PNIJidJ9vlPHsEQ&s' },
    { key: '9', name: 'Item 4', price: 'Rp. 15.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SGnlxTE3e8WbxG2v6MiaL_uuKhkxndHFOg&s' },
    { key: '10', name: 'Item 5', price: 'Rp. 4.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGIhHJQHEM4vv66Hdgxj0NEY3h6KGjeNmSw&s' },
    { key: '11', name: 'Item 1', price: 'Rp. 5.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbuyxtY4BfBS8O5sW7TekSgsDJiSnZiF_wQ&s' },
    { key: '12', name: 'Item 2', price: 'Rp. 6.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HIqpUtOaFfjgPW6w3yEa8VL_OxfXhNk34g&s' },
    { key: '13', name: 'Item 3', price: 'Rp. 30.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vWFaki8eoxhuZ69ye_lQ6PQEsf23fGFyaw&s' },
    { key: '14', name: 'Item 4', price: 'Rp. 15.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaZgk1wLzf8i28wRXXAyLXAgbUlAi1EsOOQ&s' },
    { key: '15', name: 'Item 5', price: 'Rp. 4.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VJqHjAPkUGPN1N3Ld1qb4Lu1gn5LHN1Peg&s' },
    { key: '16', name: 'Item 5', price: 'Rp. 4.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bjEUwWa2oG5YXqqo-JIbE10evu1QIbf93Q&s' },
    { key: '17', name: 'Item 5', price: 'Rp. 4.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0CS_-bHW-O5b7xmEgHsJOPCa7DnKHsrGrg&s' },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        key: (items.length + 1).toString(),
        name: `Item ${items.length + 1}`,
        price: `$${(items.length + 1) * 10}`,
        image: 'https://via.placeholder.com/150',
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: item.image }} />
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>{item.name}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSo4m0jyav8UpuOiZyRuYnSinKsn4yVvHBw&s' }}
        />
        <Text style={styles.text}>Hello, aisah!</Text>
      </View>
      <View style={styles.viewContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            onChangeText={(newText) => setText(newText)}
            value={text}
          />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.viewContainer}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            numColumns={2}
            columnWrapperStyle={styles.row}
            style={styles.flatList}
          />
          <Button title="Add Item" onPress={addItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    zIndex: 1,
    
  },
  text: {
    fontSize: 24,
    marginLeft: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
  },
  image: {
    width: 50,
    height: 50,
  },
  flatList: {
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
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
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 18,
  },
  cardPrice: {
    fontSize: 16,
    color: 'green',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  viewContainer: {
    padding: 20,
  },
});

export default App;
