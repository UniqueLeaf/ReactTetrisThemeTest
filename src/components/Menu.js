import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <button className="MetalButton MetalText metal radial" onClick={onClick}>
      Play
    </button>
  </div>
);

export default Menu;
