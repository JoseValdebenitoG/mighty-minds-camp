import React from "react";
import woodBanDate from "../assets/woodBanDate.svg";

export default function Wood() {
  return (
    <section className="wood-section d-flex flex-column">
      <div className="wood-banner">
        <img
          src={woodBanDate}
          alt="banner taller carpintería"
          className="banner"
        />
      </div>
      <div className="texts">
        <h2 className="title">Carpintería Kids</h2>
        <p>
          ¿Estás listo para explorar el fascinante mundo de la carpintería?
          Únete a nosotros en un emocionante taller diseñado especialmente para
          niños entre 6 y 11 años. En este taller, aprenderán nociones básicas
          de carpintería mientras dan rienda suelta a su creatividad y
          construyen su propia casita de pájaros bajo la guía experta de
          Bárbara, fundadora de "Zanahoria Carpintera".
        </p>
        <h6 className="subtitle">Durante el taller, los niños:</h6>
        <ul className="list">
          <li className="list-item">
            Aprenderán conceptos fundamentales de carpintería de manera segura y
            divertida.
          </li>
          <li className="list-item">
            Construirán una casita de pájaros con sus propias manos, aprendiendo
            habilidades prácticas.
          </li>
          <li className="list-item">
            Decorarán su creación con pinturas y accesorios para hacerla aún más
            especial y personal.
          </li>
          <li className="list-item">
            Se llevarán a casa su creación terminada, ¡un recuerdo duradero de
            su experiencia en el taller!
          </li>
        </ul>
        <p>
          Bárbara, con 6 años de experiencia en carpintería y la pasión por
          enseñar a los niños, garantizará un ambiente seguro y emocionante
          donde cada niño podrá explorar su creatividad y habilidades manuales.
        </p>
        <a
          href="https://forms.gle/qER45ERz5UbnBtUk6"
          target="_blank"
          className="btn btn-outline-success"
          role="button"
        >
          Inscríbite aquí
        </a>
      </div>
    </section>
  );
}
