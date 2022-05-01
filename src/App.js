import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './componentes/ui/Header';
import CharacterGrid from "./componentes/characters/CharacterGrid";
import Search from "./componentes/ui/Search";


const App = () => {

  const [ items, setItems ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  const [ query, setQuery] = useState(""); 


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)


      setItems(result.data)
      setLoading(false);
    }


    fetchItems();
  }, [query])


  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading = { isLoading } items= { items } />

    </div>
  );
}

export default App;
