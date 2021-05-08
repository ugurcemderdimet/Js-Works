import "./index.css";
import React, { useState } from "react";

let eklenenIsimler = [];
export default function App() {
  const [isim, setIsim] = useState("");
  const [mesaj, setMesaj] = useState("");

  const handleChange = (event) => setIsim(event.target.value);

  let newIsim = ["Ugur", "ugur", "UGUR"];

  const handleSubmit = (isim) => {
    setMesaj("Analiz yapılıyor... Lütfen bekleyin...");
    if (isim.length < 3) {
      setTimeout(() => setMesaj("En az 3 karakterli olmalidir."), 1000);
    } else {
      if (newIsim.indexOf(isim) > -1) {
        setTimeout(() => setMesaj("Lütfen başka isim dene!"), 1000);
      } else {
        setTimeout(() => setMesaj("BAŞARILI BİR KARAKTER !!!"), 1000);
      }
    }
    eklenenIsimler.push(isim);
  };
  return (
    <div className="App">
      <h1>Karakter Analizi</h1>
      <input
        name="isim"
        placeholder="isminiz"
        value={isim}
        onChange={handleChange}
      />
      <button onClick={() => handleSubmit(isim)}>Giriş</button>
      <br />
      {mesaj ? <h4>{mesaj}</h4> : <h2>İsmi Giriniz.</h2>}
      <p id="baslik">Analiz Edilen İsimler</p>
      {eklenenIsimler.map((listitem, index) => (
        <p key={index}>{listitem}</p>
      ))}
    </div>
  );
}
