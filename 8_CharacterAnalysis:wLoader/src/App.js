import "./index.css";
import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const eklenenIsimler = [];
function Message({ mesaj }) {
  return <h4>{mesaj}</h4>;
}

function Spinner() {
  return (
    <div>
      <h4>Analiz yapılıyor... Lütfen bekleyin...</h4>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default function App() {
  const [isim, setIsim] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => setIsim(event.target.value);

  let newIsim = ["ugur", "Ugur", "UGUR"];

  const handleSubmit = (isim) => {
    mesaj ? setLoading(false) : setLoading(true);

    setMesaj(null);
    if (isim.length < 3) {
      setTimeout(() => setMesaj("En az 3 karakterli olmalidir."), 2100);
    } else {
      if (newIsim.indexOf(isim) > -1) {
        setTimeout(() => {
          setMesaj("Lütfen başka bir isim dene!");
        }, 2100);
      } else {
        setTimeout(() => setMesaj("BAŞARILI BİR KARAKTER !!!"), 2100);
      }
    }
    setTimeout(() => eklenenIsimler.push(isim), 2200);
  };

  return (
    <div className="App">
      <div>
        <h1>Karakter Analizi</h1>
        <input
          name="isim"
          placeholder="isminiz"
          value={isim}
          onChange={handleChange}
        />
        <br />
        <button onClick={() => handleSubmit(isim)}>Giriş</button>
        <br />
        <Message mesaj={mesaj} />
        {loading && Spinner}
        <p id="baslik">Analiz Edilen İsimler</p>
        {eklenenIsimler.map((listitem, index) => (
          <p key={index}>{listitem}</p>
        ))}
      </div>
    </div>
  );
}
