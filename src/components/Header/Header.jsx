import "./Header.scss";
import PropTypes from "prop-types";
import useCounterStore from "../../store/Store";

export default function Header({ backgroundColor }) {
  //Hämta in Count hooken
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <div className="wrapper__header" style={{ backgroundColor }}>
        <div className="shop__container">
          <img
            src="src\assets\images\Header\Header_Orders.png"
            alt="Bild för antal"
          />
          <span>{count}</span>
        </div>
        <img src="src\assets\images\Header\Header_bg.png" />
        <button className="btn__burger" alt="Hamburarmeny">
          <img src="src\assets\images\Header\Header_Burger.jpg" />
        </button>
        <button className="btn__cart">
          <img src="src\assets\images\Header\Header_background.png" />
        </button>
      </div>
    </>
  );
}

Header.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
