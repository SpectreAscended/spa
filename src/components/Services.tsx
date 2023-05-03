import styles from './services.module.css';
import { Element } from 'react-scroll';

const Services = () => {
  return (
    <Element name="services" id="services-wrapper">
      <section className={styles.services}>
        <h2>Services</h2>
        <ul>
          <li>Rejuvenate Body & Mind</li>
          <li>Certified Massage Therapy</li>
          <li>Relaxing or Deep Tissue Massage</li>
          <li>Receipt can be provided</li>
          <li>Professional, clean, friendly & welcoming environment</li>
        </ul>
      </section>
    </Element>
  );
};

export default Services;
