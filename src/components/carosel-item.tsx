type CaroselProps = {
  image: string;
  title: string;
  description: string;
  duration: string;
  money: number;
  activeIndex: number;
  index: number;
};

export default function CaroselItem({
  image,
  title,
  description,
  duration,
  money,
  activeIndex,
  index,
}: CaroselProps) {
  return (
    <div className={`carousel-item ${activeIndex === index ? "active" : ""}`}>
      <img src={image} className="d-block w-100" alt={title} />
      <div className="carousel-caption d-none d-md-block bg bg-black p-1 bg-opacity-75">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="d-flex justify-content-between align-items-center ">
          <span>{duration}</span>
          <span className="text-primary">{money} €</span>
        </div>
      </div>
    </div>
  );
}
