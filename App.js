import { useSelector } from 'react-redux';
import './App.css';
import ClientList from './Redux/Component/ClientList';
import './Redux/Component/Client.css'
import Header from './Header';

  



function App(props) {
  const aff = useSelector(state => state.projectReducer.client)

  return (
    <>
    <Header></Header>
    <div className="App">
    <ClientList aff={aff}></ClientList>
    
    </div>
    </>
  );
}

export default App;
