
function InfoPerso() {
  return (
    <header className="info-perso">
      <img src="profil.jpeg" alt="photo de profile" className="photo-profil" />

      <h1>Ahamada Boina Nailane</h1>
      <h2>Développeur Web Junior</h2>

      <div className="coordonnees">
        <p>📍 Dakar, Sénégal</p>
        <p>📧 nailane.ahamad@mail.com</p>
        <p>📞 +221 78 145 76 30</p>
      </div>

      <p className="profil">
        Étudiant en informatique, passionné par le
        développement web et la création de sites
        modernes, accessibles et performants.
      </p>
    </header>
  );
}

export default InfoPerso;
