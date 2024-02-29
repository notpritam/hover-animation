import "./App.css";

function App() {
  const handleMouseMove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <>
      <div className="container" onMouseMove={handleMouseMove}>
        {Array.from({ length: 6 }).map((item, index) => (
          <div key={index} className="card">
            <div className="card-content">Card Content Here</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
