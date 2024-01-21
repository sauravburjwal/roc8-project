const getData = async (searchTerm, per_page = 21) => {
  const q = searchTerm.split(' ').join('+');
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=41910755-8af38197385e9859f61f51db7&q=${q}&per_page=${per_page}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getData };
