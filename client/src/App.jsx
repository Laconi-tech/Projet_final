import React from 'react';
import CommentaireForm from './components/CommentaireForm';
import CommentaireList from './components/CommentairesList';
import Top from './components/Top';
import AlwaysOnTop from './components/AlwaysOnTop';
import Lorem from './components/Lorem';
import Banner from './components/Banner';

import './App.css';
import Projets from './components/Projets';
import LinkBanner from './components/LinkBanner';

function App() {
  return (
    <div className="App">
       < AlwaysOnTop />
      < Top />
      < Banner /> 
      < Projets />
      < LinkBanner />
      
      <CommentaireForm />
      <CommentaireList />
      {/* < Lorem /> */}
    </div>
  );
}

export default App;
