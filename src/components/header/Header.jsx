const Header = (props) => {
  return (
    <div>
      <header className="d-flex justify-content-center py-3 text-bg-dark">
        <span className="fs-4">{props.title}</span>
      </header>
    </div>
  );
};

export default Header;
