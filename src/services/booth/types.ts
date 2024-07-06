type BoothItem = {
  _id: string;
  type: string;
  typeOfParticipation: string;
  earlyPrice: number;
  earlyDate: string;
  normalPrice: number;
  normalDate: string;
  latePrice: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type NewBooth = {
  typeOfParticipation: string;
  type: string;
  earlyPrice: number;
  earlyDate: string;
  normalPrice: number;
  normalDate: string;
  latePrice: number;
  description: string;
};

export type BoothList = BoothItem[];
