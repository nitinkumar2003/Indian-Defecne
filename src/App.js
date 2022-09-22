import './App.css';

import Header from './components/Header'
import Headermenu from './components/Headermenu';
import Caurosal from './components/Caurosal';
import Footer from './components/Footer';
// about
import AboutMod from './components/Abouts/AboutMod';
import AboutOrgCh from './components/Abouts/AboutOrgCh';
import AboutBussRuls from './components/Abouts/AboutBussRuls';
import AboutFormerMinister from './components/Abouts/AboutFormerMinister';


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

    
     

     <Router>

     <Header />
     <Headermenu />
       <Routes>
         <Route path="/" element={<Caurosal />} />

         <Route path="/aboutmod" element={<AboutMod />} />
         <Route path="/aboutorgch" element={<AboutOrgCh />} />
         <Route path="/aboutbussrules" element={<AboutBussRuls />} />
         <Route path="/aboutformerminister" element={<AboutFormerMinister />} />

       </Routes>
       <Footer />
     </Router>     
    </div>
  );
}

export default App;
