export type Travel = {
  id: number;
  titolo: string;
  durata: string;
  descrizione: string;
  prezzo: number;
  img: string;
};

export type HolidayResponse = {
  success: boolean;
  data: Travel[];
};
