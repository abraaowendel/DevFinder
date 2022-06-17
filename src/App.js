import './App.css';
import { useState } from 'react';
import Header from './components/Header/HeaderComponent';
import Search  from './components/Search/SearchComponent';
import CardComponent from './components/User/CardComponent';
import Api from './Api';

function App() {
  const [json,setJson] = useState([])
  const handleSearch = async (user) =>{
    try {
      let json = await Api.getUser(user);
      if(json.login){
        setJson(json)
      }
      else{
        throw ''
      }
    } catch (error) {
        setJson('')
    }
  }

  return (
   <div>
      <Header/>
      <Search onAdd={handleSearch}/>
      <CardComponent data={json}/>
   </div>
  );

}

export default App;
