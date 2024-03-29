import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'

function App() {
  return (
  <div>
    <Header/>
    <main>
      <Container className='py-3'>
        <HomeScreen/>
      </Container>
    </main>
    <Footer/>
  </div>
  );
  }  
  export default App;

