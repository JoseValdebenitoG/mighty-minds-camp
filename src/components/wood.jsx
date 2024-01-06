import React from "react";
import woodban from "../assets/woodban.svg";

export default function Wood() {
  return (
    <section className="wood-section d-flex flex-column">
      <div className="wood-banner">
        <img src={woodban} alt="banner taller carpintería" className="banner" />
      </div>
      <div className="wood-text">
        <h2 className="wood-title ">Carpintería Kids</h2>
        <h5>
          ¡Descubre el mundo de la carpintería y crea tu propio juguete único!
        </h5>
        <p>
          ¿Estás listo para explorar el fascinante mundo de la carpintería?
          Únete a nosotros en un emocionante taller diseñado especialmente para
          niños entre 6 y 11 años. En este taller, aprenderán nociones básicas
          de carpintería mientras dan rienda suelta a su creatividad y
          construyen su propia casita de pájaros bajo la guía experta de
          Bárbara, fundadora de "Zanahoria Carpintera".
        </p>
        <h6>Durante el taller, los niños:</h6>
        <ul className="wood-list">
          <li className="wood-item">
            Aprenderán conceptos fundamentales de carpintería de manera segura y
            divertida.
          </li>
          <li className="wood-item">
            Construirán una casita de pájaros con sus propias manos, aprendiendo
            habilidades prácticas.
          </li>
          <li className="wood-item">
            Decorarán su creación con pinturas y accesorios para hacerla aún más
            especial y personal.
          </li>
          <li className="wood-item">
            Se llevarán a casa su juguete terminado, ¡un recuerdo duradero de su
            experiencia en el taller!
          </li>
        </ul>
        <p>
          Bárbara, con 6 años de experiencia en carpintería y la pasión por
          enseñar a los niños, garantizará un ambiente seguro y emocionante
          donde cada niño podrá explorar su creatividad y habilidades manuales.
        </p>
        <a
          href="#"
          target="_blank"
          className="btn btn-outline-success disabled"
          role="button"
        >
          Próximamente...
        </a>
      </div>
    </section>
  );
}
