import { DaDataParty, DaDataSuggestion } from "react-dadata";

export interface IThemeCard {
  title: string;
  categoryes: string[];
  text: string;
  countTask: number;
  countCompletedTask: number;
}

export type FilteredCategory =
  | "Все"
  | "Рабочая среда"
  | "Библиотеки"
  | "Пройденные"
  | "Не пройденные";

type Suggestion = {
  data: { city: string };
};

export interface FetchGeolocate {
  suggestions: Suggestion[];
}

export interface FetchCompanyInfo {
  suggestions: DaDataSuggestion<DaDataParty>[];
}

export interface ICompanyInfo {
  inn: string;
  name: string;
  address: string;
  status: string;
  foundationDate: string;
  liquidationDate: string;
  founders: string[];
  branches: string[];
}

export interface IFilleal {
  title: string;
  inn: string;
  city: string;
  status: string;
  registratonDate: number | null;
  onClick: () => void;
}
