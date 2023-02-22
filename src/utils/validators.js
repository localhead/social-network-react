export const requiredField = (value) => {
  if (value) return undefined;

  return "Заполните поле";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength)
    return `Максимальная длинна ${maxLength} символов`;
  else return undefined;
};

export const minLength10 = (value) => {
  if (value.length < 1) return `Максимальная длинна ${10} символов`;

  return undefined;
};

export const maxLength10 = (value) => {
  if (value.length > 10) return `Максимальная длинна ${10} символов`;

  return undefined;
};
