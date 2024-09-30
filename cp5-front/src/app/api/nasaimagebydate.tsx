import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const NASA_IMAGES_BY_DATE = (date: string) => 'https://api.nasa.gov/planetary/apod';

const NASAImageByDate = () => {
  const [image, setImage] = useState(null);
  const router = useRouter();
  const { date } = router.query;

  useEffect(() => {
    if (!date) return;

    const fetchImage = async () => {
      const response = await fetch(NASA_IMAGES_BY_DATE(date as string));
      const data = await response.json();
      setImage(data);
    };

    fetchImage();
  }, [date]);

  if (!image) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={image.url} alt={image.title} className="w-full h-64 object-cover"/>
      <h1 className="mt-2 text-3xl">{image.title}</h1>
      <p>{image.explanation}</p>
    </div>
  );
};

export default NASAImageByDate;
