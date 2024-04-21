export const formartDate = (date: string): string => {
  const nuevaFechaJs = new Date(date);

  return new Intl.DateTimeFormat("es-HN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(nuevaFechaJs);
};
