import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import axios from "axios";

const Drinks = () => {
  const [allDrinks, setAllDrinks] = useState([]);
  const [drink, setDrink] = useState('');
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    axios.get('http://10.136.63.142:3000/drinks') // Altere para o endpoint correto
      .then(response => {
        setAllDrinks(response.data);
        // console.log(allDrinks);
      })
      .catch(error => {
        console.error('Erro ao recuperar dados:', error);
      });
  }, []);

  const arrayDeNomesDrinks = allDrinks.map((drink) => drink.strDrink)
  // console.log(arrayDeNomesDrinks);

  const buscarObjetoDrink = (array, bebida) => {
    const myDrink = array.find(drink => drink.strDrink === bebida)
    return myDrink
  }

  const buscarIngredientes = () => {
    const bebida = buscarObjetoDrink(allDrinks, drink)
    const ingredientes = []
    ingredientes.push(bebida.strIngredient1)
    ingredientes.push(bebida.strIngredient2)
    ingredientes.push(bebida.strIngredient3)
    ingredientes.push(bebida.strIngredient4)
    ingredientes.push(bebida.strIngredient5)
    ingredientes.push(bebida.strIngredient6)
    ingredientes.push(bebida.strIngredient7)
    ingredientes.push(bebida.strIngredient8)
    ingredientes.push(bebida.strIngredient9)
    ingredientes.push(bebida.strIngredient10)
    ingredientes.push(bebida.strIngredient11)
    ingredientes.push(bebida.strIngredient12)
    ingredientes.push(bebida.strIngredient13)
    ingredientes.push(bebida.strIngredient14)
    ingredientes.push(bebida.strIngredient15)
    
    const ingredientesFiltrados = ingredientes.filter((ingrediente) => ingrediente !== null)
    setIngredientes(ingredientesFiltrados);
  }

  return (
    <View>
      <TextInput
        placeholder="Digite o nome do Drink"
        value={drink}
        onChangeText={text => setDrink(text)}
      />
      <Button title="Buscar" onPress={buscarIngredientes} />
      <Text>Ingredientes:</Text>
      
        <View>
          <Text>{ingredientes.join(', ')}</Text>
        </View>
      
    </View>
  );
};

export default Drinks;
