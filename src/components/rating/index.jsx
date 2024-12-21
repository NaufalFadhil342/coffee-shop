import { IoIosStar } from 'react-icons/io';

const Rating = ({ maxStars, rating, size }) => {
  return (
    <div className="w-auto flex">
      {Array(rating)
        .fill()
        .map((_, index) => (
          <IoIosStar key={index} size={size} className="text-accent" />
        ))}
      {Array(maxStars - rating)
        .fill()
        .map((_, index) => (
          <IoIosStar key={index} size={size} className="text-gray-500/50" />
        ))}
    </div>
  );
};

export default Rating;
