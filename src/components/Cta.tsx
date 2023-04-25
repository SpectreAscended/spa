import styles from './cta.module.css';

const Cta: React.FC = () => {
  return (
    <section className={styles.cta}>
      <h2>Book an Appointment</h2>
      <p>
        Text or call <a href="tel:6395250611">639-525-0611</a>
      </p>
      <h3>Open every day 10am to 9pm</h3>
      <p>Appointment Only, No walk-ins please</p>
      <h2>Location</h2>
      <p>611, 3rd Ave. N.</p>
      <p>Saskatoon, SK</p>
    </section>
  );
};

export default Cta;
