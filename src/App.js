import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';


//style
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
   <div className="App">   
        <Header />
        <div className='content'>
          Content
        </div>
        <div className='py-3'>
          <ContactForm />
        <Footer />  
        </div> 
   </div>
  );
}

export default App;
