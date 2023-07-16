import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer pt-3">
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Thank you to Faisal Sir &amp; Ostad team from this amazing course</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          A student in <cite title="Source Title">MERN Stack Batch - 3</cite>
        </figcaption>
      </figure>
      <p className="text-center text-body-secondary">© 2023</p>
    </footer>
  );
};

export default footer;
