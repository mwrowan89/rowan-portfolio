import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Bio">
          <img className="Profile-picture" src="Goat.png" alt="profile-pic" />
          <h1>Michael Rowan</h1>
          <p>
            I am a versatile professional with a diverse background in teamwork,
            emergency response, management, and entrepreneurship. As an Eagle
            Scout and paramedic, I honed my skills in leadership and emergency
            handling. I later founded a successful woodworking business,
            utilizing technology like AutoCAD to achieve high precision and
            client satisfaction. My passion for technology led me to a software
            engineering boot camp, where I mastered multiple programming
            languages. I'm now seeking an entry-level software developer
            position to apply my skills in creating efficient and user-friendly
            applications. Click the links below to learn more or get in touch.
          </p>
          <div className="Contacts">
            <p>
              <a
                href="https://www.linkedin.com/in/michael-rowan-dev/"
                target="blank"
              >
                LinkedIn
              </a>{" "}
              ||
              <a href="mailto:mwrowan89dev@gmail.com?subject=Hello%20there&body=I%20wanted%20to%20reach%20out%20to%20you%20because...">
                {" "}
                Gmail{" "}
              </a>
              ||
              <a href="https://github.com/mwrowan89" target="blank">
                {" "}
                GitHub{" "}
              </a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
