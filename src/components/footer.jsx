import logoMMC from "../assets/mmc.png";

function Footer() {
  return (
    <footer className="footer-wrapper d-flex flex-column align-items-center justify-content-center flex-wrap bg-black">
      <h4 className="footer-title text-center p-4 text-white">
        Síguenos en nuestro Instagram:
      </h4>
      <a
        href="https://www.instagram.com/mightymindscamp"
        className="social-icons d-flex flex-wrap align-items-center justify-content-center bg-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <img
        src={logoMMC}
        alt="logo Mighty Minds"
        className="footer-logo mx-auto d-block"
        width={140}
      />
      <div className="copyright text-secondary mt-4">
        <p>
          <i className="copy me-2 bi bi-c-circle"></i>
          2024 | Desarrollado con <i className="bi bi-heart-fill"></i> por Jose
          Valdebenito
        </p>
      </div>
    </footer>
  );
}

export default Footer;
