export const formatDate = (dateString: string): string => {
  if (!dateString) return "";

  const timestamp = Date.parse(dateString);
  if (isNaN(timestamp)) return "Fecha inválida";

  const date = new Date(timestamp);

  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
};
