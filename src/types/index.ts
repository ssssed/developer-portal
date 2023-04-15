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
