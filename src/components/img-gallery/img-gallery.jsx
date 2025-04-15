import s from './img-gallery.module.css';
import ImageCard from '../img-card/img-card';

export default function ImageGallery({ images, onEnlarge }) {
  return (
    <ul className={s.image_gallery}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onEnlarge={onEnlarge} />
        </li>
      ))}
    </ul>
  );
}
