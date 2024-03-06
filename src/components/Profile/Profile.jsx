import Header from "../Header/Header";
import Profile_Profile from "../../assets/images/Profile/Profile_Profile.png";
import "./Profile.scss";

export default function Profile() {
  return (
    <>
      <div className="card__wrapper--profile">
        <Header backgroundColor=" rgb(47, 41, 38)" />
        <section>
          <img className="section__img--profile" src={Profile_Profile} />
          <h3>Sixten Kaffelövér</h3>
          <a href="sixten.kaffelover@zocom.se">sixten.kaffelover@zocom.se</a>
        </section>
        <h2>Orderhistorik</h2>
        <section className="section__lower">
          <div className="left">
            <p className="p__orderNumber">#AB1123282323Z</p>
            <p className="total__sum--text">total ordersumma </p>
            <div className="Thin__Line"></div>
          </div>
          <div className="right">
            <p className="dateOfPurchase">20/03/06</p>
            <p className="summa__total">443 kr</p>
            <div className="Thin__Line"></div>
          </div>
        </section>
        <section className="section__lower">
          <div className="left">
            <p className="p__orderNumber">#AB1123282323Z</p>
            <p className="total__sum--text">total ordersumma </p>
            <div className="Thin__Line"></div>
          </div>
          <div className="right">
            <p className="dateOfPurchase">20/03/06</p>
            <p className="summa__total">443 kr</p>
            <div className="Thin__Line"></div>
          </div>
        </section>
        <section className="section__lower">
          <div className="left">
            <p className="p__orderNumber">#AB1123282323Z</p>
            <p className="total__sum--text">total ordersumma </p>
          </div>
          <div className="right">
            <p className="dateOfPurchase">20/03/06</p>
            <p className="summa__total">443 kr</p>
          </div>
        </section>
        <div className="Thic__Line"></div>
        <section className="section__lower">
          <p className="total__cost">Totalt spenderat</p>
          <p className="total__cost__sum">1660 kr</p>
        </section>
      </div>
    </>
  );
}
