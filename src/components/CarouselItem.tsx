import styles from './carouselItem.module.css';

interface CarouselItemProps {
  image: string;
  description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, description }) => {
  return (
    <figure className={styles['carousel-item']}>
      <img src={image} alt={description} />
    </figure>
  );
};

export default CarouselItem;
