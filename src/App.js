import React, { Component } from "react";
import Uva from "./img/Uva.jpg";

export default class App extends Component {
  state = {
    nome: "Daniel",
    idade: 18,
    comidaFavorita: "Feijoada",
    musica: ["Som do ceu", "30 dias", "maneva-saudades do tempo"]
  };

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
        <img src={Uva} alt="Uva" />
      </div>
    );
  }
}
