export const getClassName = (value: number) => {
  if (value > 80) return "bg-success";
  if (value > 60) return "bg-info";
  return "bg-primary";
};

export const getImage = (id: string) =>
  `https://drive.google.com/thumbnail?id=${id}`;
