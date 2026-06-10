function formatDate(date) {
  if (!date) return;

  const d = new Date(date);

  const formattedDate = Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);

  return formattedDate;
}

export { formatDate };
