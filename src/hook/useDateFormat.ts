export const useDateFormat = (data: Nullable<number>) => {
  if (null) return null;
  const date = new Date(data);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}.${month}.${year}`;
};
