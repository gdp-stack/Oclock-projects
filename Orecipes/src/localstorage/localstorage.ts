export const saveTokenAndPseudoInLocalStorage = (
  pseudo: string,
  token: string,
) => {
  localStorage.setItem('pseudo', pseudo);
  localStorage.setItem('token', token);
};

export const getTokenAndPseudoFromLocalStorage = () => {
  const pseudo = localStorage.getItem('pseudo');
  const token = localStorage.getItem('token');

  return { pseudo, token };
};

export const removePseudoAndTokenFromLocalStorage = () => {
  localStorage.removeItem('pseudo');
  localStorage.removeItem('token');
};
