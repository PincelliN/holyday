type ButtonSlideProps = {
  index: number;
  activeIndex: number;
};

export default function ButtonSlide({ index, activeIndex }: ButtonSlideProps) {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={index}
      className={activeIndex === index ? "active" : undefined}
      aria-current={activeIndex === index ? "true" : undefined}
      aria-label={`Slide ${index + 1}`}
    />
  );
}
