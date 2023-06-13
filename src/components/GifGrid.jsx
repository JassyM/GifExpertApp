import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  /* Sin uso de useEffect Custom
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const data = await getGifs(category);
    setImages(data);
  };

  useEffect(() => {
    getImages();
    //getGifs(category).then( data => setImages(data));
  }, []);
  */
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
