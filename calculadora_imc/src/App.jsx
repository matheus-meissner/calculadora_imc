import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setClassificacao('Obesidade');
    } else {
      setClassificacao('Sobrepeso');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
