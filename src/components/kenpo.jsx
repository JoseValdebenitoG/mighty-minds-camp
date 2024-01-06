import React from "react";
import kenpoban from "../assets/kenpoban.svg";

export default function Kenpo() {
  return (
    <section className="kenpo-section d-flex flex-column">
      <div className="kenpo-banner">
        <img src={kenpoban} alt="banner taller kenpo" className="banner" />
      </div>
      <div className="kenpo-text">
        <h2 className="kenpo-title">Técnicas contra el bullying</h2>
        <p>
          Únete a nuestro taller impartido por Karina Gatica, instructora de
          kenpo karate en Fighter Dragons Kenpo Studio con 6 años de
          experiencia. Aprende técnicas efectivas y fortalece tu autoestima en
          un ambiente seguro y motivador. Taller desde 4 a 11 años. Duración
          1:30 aproximadamente Incluye hidratación, baño privado y lugar para
          dejar tus pertenencias de manera segura mientras se imparte la clase.
          Ubicación a pasos del metro santa ana. Cupos por bloque: 10 Valor
          15000 por alumno, consulta por precios para hermanos. Medios de pago:
          Webpay
        </p>
        <a
          href="https://forms.gle/qER45ERz5UbnBtUk6"
          target="_blank"
          className="btn btn-outline-primary"
          role="button"
        >
          Inscríbete aquí
        </a>
      </div>
    </section>
  );
}
