import styles from './carouselItem.module.css';

interface CarouselItemProps {
  image: string;
  description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, description }) => {
  return (
    <div className={styles['carousel-item']}>
      <img src={image} alt={description} />
    </div>
  );
};

export default CarouselItem;
