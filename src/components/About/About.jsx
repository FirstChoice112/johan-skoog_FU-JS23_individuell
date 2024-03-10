import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About_Eva from "../../assets/images/About/About_Eva.jpg";
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="card__wrapper--about">
        <Header backgroundColor="$PrimaryBackround" />
        <h2>Vårt kaffe</h2>
        <section className="section__text">
          <p className="section__text--highlighted">
            Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
            grounds dripper, crema, strong whipped, variety extra iced id lungo
            half and half mazagran. Pumpkin spice.
          </p>
          <p className="section__text--normalText">
            Que dark fair trade, spoon decaffeinated, barista wings whipped, as
            rich aftertaste, con panna milk black, arabica white rich beans
            single shot extra affogato. So affogato macchiato sit extraction
            instant grinder seasonal organic, turkish single shot, single
            origin, and robusta strong to go so dripper. Viennese froth, grounds
            caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
            frappuccino medium, café au lait flavour cultivar ut bar instant
            kopi-luwak.
          </p>
          <p className="section__text--normalText">
            Roast id macchiato, single shot siphon mazagran milk fair trade est
            aroma a half and half and, so, galão iced to go, whipped as cream
            cup pumpkin spice iced. At extra, rich grinder, brewed to go,
            steamed half and half at, that, percolator macchiato trifecta and
            body as arabica dripper. In galão black java milk sit trifecta,
            robusta, acerbic café au lait instant shop latte. Seasonal bar shop
            filter aroma id, crema, affogato viennese cultivar aftertaste,
            seasonal, percolator cream black, galão flavour, milk aromatic
            turkish skinny crema.
          </p>
        </section>
        <section className="section__founder">
          <img className="section__founder--image" src={About_Eva} />
          <h3 className="section__founder--name">Eva Cortado</h3>
          <p className="section__founder--workrole">VD & Grundare</p>
        </section>
        <Footer />
      </div>
    </>
  );
}
