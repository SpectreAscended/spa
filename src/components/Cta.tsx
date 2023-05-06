import { Element } from 'react-scroll';
import styles from './cta.module.css';

const Cta: React.FC = () => {
  return (
    <section className={styles.cta} id="book">
      <Element name="book">
        <h2>Book an Appointment</h2>
        <p>
          Text or call <a href="tel:6395250611">639-525-0611</a>
        </p>
        <Element name="hours">
          <h3>Open every day 10am to 9pm</h3>
        </Element>
        <p>Appointment Only, No walk-ins please</p>
      </Element>
      <Element name="location">
        <h2
          className={styles['heading-secondary']}
          id="location"
          style={{ marginTop: '3rem' }}
        >
          Location
        </h2>
        <p>611, 3rd Ave. N. Saskatoon, SK</p>
      </Element>
    </section>
  );
};

export default Cta;
