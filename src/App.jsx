
import InfoPerso from './components/infoPerso';
import Experiences from './components/experience';
import Competences from './components/competences';
import './App.css';

function App() {
  return (
    <main className="cv">
      <InfoPerso />

      <div className="contenu-cv">
        <Experiences />
        <Competences />
      </div>

      <footer className="pied-cv">
        CV réalisé avec React, Vite et CSS.
      </footer>
    </main>
  );
}

export default App;
