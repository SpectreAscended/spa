import styles from './cta.module.css';

const Cta: React.FC = () => {
  return (
    <section className={styles.cta}>
      <h2>Book an Appointment</h2>
      <p>
        Text or call <a href="tel:6395250611">639-525-0611</a>
      </p>
    </section>
  );
};

export default Cta;
