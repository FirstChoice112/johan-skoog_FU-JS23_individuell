import "./Button.scss";
import PropTypes from "prop-types";

export default function Button({ buttontext, buttonStyle }) {
  return (
    <>
      <div className="Btn_wrapper">
        <button className={`Btn_style ${buttonStyle}`}>{buttontext}</button>
      </div>
    </>
  );
}

//PropTypes för att definiera typen av buttonText
Button.propTypes = {
  buttontext: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
};
