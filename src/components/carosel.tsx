import { useEffect, useState } from "react";
import { getAllHoliday } from "../api/holiday";
import { Travel } from "../types/holiday";
import CaroselItem from "./carosel-item";
import ButtonSlide from "./button-slide";
import Loader from "./loader";

export default function Carosel() {
  const [holidays, setHolidays] = useState<Travel[]>([]);
  const [isActive, setIsActive] = useState(0);

  const fetchHoliday = async () => {
    try {
      const response = await getAllHoliday();
      const result = response.data;
      setHolidays(result);
    } catch (error) {
      console.log("Recupero vacanze fallito", error);
    }
  };

  const handleNext = () => {
    if (!holidays.length) return;
    setIsActive((prev) => (prev === holidays.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (!holidays.length) return;
    setIsActive((prev) => (prev === 0 ? holidays.length - 1 : prev - 1));
  };

  useEffect(() => {
    fetchHoliday();
  }, []);

  if (!holidays.length) {
    return <Loader />;
  }

  return (
    <div id="carouselExampleCaptions" className="carousel slide w-75 h-75">
      <div className="carousel-indicators">
        {holidays.map((holiday, index) => (
          <ButtonSlide
            key={`${holiday.id}-buttonSlide`}
            index={index}
            activeIndex={isActive}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {holidays.map((holiday, index) => (
          <CaroselItem
            key={holiday.id}
            title={holiday.titolo}
            description={holiday.descrizione}
            duration={holiday.durata}
            money={holiday.prezzo}
            image={holiday.img}
            index={index}
            activeIndex={isActive}
          />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
