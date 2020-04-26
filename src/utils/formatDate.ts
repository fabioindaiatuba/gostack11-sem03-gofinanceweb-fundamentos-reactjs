const formatDate = (value: Date | number): string =>
  Intl.DateTimeFormat('pt-BR').format(value); // TODO

export default formatDate;
