
import { useState } from 'react';
import { Content } from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
const [addToCart, setAddToCart] = useState(0)
  
  return (
   <>
   <Header cart={addToCart} />
   <Content onAdd ={(val)=>{
     setAddToCart(val)
   }} />
   
   <Footer/>
   </>
  );
}

export default App;
