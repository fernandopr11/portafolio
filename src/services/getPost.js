export const getPost = async username => {
  const url = `https://dev.to/api/articles?username=${username}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
