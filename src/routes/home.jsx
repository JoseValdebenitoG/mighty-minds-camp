import React from "react";
import banner from "../assets/banner.svg";

export default function Home() {
  return (
    <main className="home">
      <div>
        <img src={banner} alt="banner mmc" className="banner" />
      </div>
      <section className="home-text container">
        <h2>Quienes Somos</h2>
        <p>
          <strong>Misión</strong>: "En Mighty Minds Camp, nuestra misión es
          nutrir mentes jóvenes mediante la creación de un entorno de
          aprendizaje seguro y estimulante. Buscamos inspirar la curiosidad,
          fomentar la creatividad y fortalecer la confianza de cada niño,
          brindándoles herramientas para explorar sus pasiones y alcanzar su
          máximo potencial. Nos comprometemos a ofrecer una experiencia
          educativa emocionante y diversa, donde cada niño se sienta empoderado
          para enfrentar el mundo con ingenio y determinación." <br /> <br />
          <strong>Visión:</strong> "Visualizamos un futuro donde cada niño que
          pasa por Mighty Minds Camp descubre y cultiva sus habilidades únicas.
          Queremos ser reconocidos como el punto de partida para el desarrollo
          de jóvenes mentes líderes, donde la innovación, la colaboración y el
          crecimiento personal sean los cimientos de una generación lista para
          enfrentar los desafíos del mañana con valentía y resiliencia." Estos
          enunciados reflejan el compromiso de la organización con el desarrollo
          integral de los niños, ofreciendo un ambiente enriquecedor que
          estimula su creatividad, curiosidad y confianza.
        </p>
        <a href="/workshops" role="button" className="btn btn-warning">
          Nuestros talleres
        </a>
      </section>
    </main>
  );
}
