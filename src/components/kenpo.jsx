import React from "react";
import kenpoban from "../assets/kenpoban.svg";

export default function Kenpo() {
  return (
    <section className="kenpo-section d-flex flex-column">
      <div className="kenpo-banner">
        <img src={kenpoban} alt="banner taller kenpo" className="banner" />
      </div>
      <div className="texts">
        <h2 className="title">Técnicas contra el bullying</h2>
        <p>
          En nuestro taller especializado de 'Técnicas de Defensa contra el
          Bullying', bajo la tutela de Karina Gatica, con 6 años de experiencia
          en Kenpo, tus hijos aprenderán habilidades esenciales para enfrentar
          el bullying. En un entorno seguro y acogedor, los niños de 4 a 11 años
          adquirirán destrezas para protegerse, fortalecer su autoestima y
          aprender a afrontar situaciones desafiantes. ¡Preparamos a tus
          pequeños para un mundo más seguro y confiado! Regístralos ahora para
          que se conviertan en su propia defensa.
        </p>
        <a
          href="https://forms.gle/qER45ERz5UbnBtUk6"
          target="_blank"
          className="btn btn-outline-primary disabled"
          role="button"
        >
          Cancelado
        </a>
      </div>
    </section>
  );
}
