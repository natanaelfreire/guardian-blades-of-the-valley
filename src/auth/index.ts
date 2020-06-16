const isAuthenticated = () => {
  const token = localStorage.getItem('gb-token') || undefined;

  return token ? true : false;
}

export default isAuthenticated;