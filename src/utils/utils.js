const createPlanetsData = async () => {
  let obj = {};
  const planets = await getData(`https://findfalcone.geektrust.com/planets`);

  planets.forEach((planet) => {
    planet.selected = false;
    obj[planet.name] = planet;
  });
  return obj;
};

const createVehiclesData = async () => {
  let obj = {};
  const vehicles = await getData(`https://findfalcone.geektrust.com/vehicles`);

  vehicles.forEach((vehicle) => {
    vehicle.left = vehicle.total_no;
    obj[vehicle.name] = vehicle;
  });
  return obj;
};

const postData = async (url, headers, body = null) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { ...headers, Accept: 'application/json' },
      body,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchToken = async () => {
  const { token } = await postData('https://findfalcone.geektrust.com/token');
  return token;
};

const find = async (body) => {
  const headers = { 'Content-Type': 'application/json' };
  const response = await postData(
    'https://findfalcone.geektrust.com/find',
    headers,
    JSON.stringify(body)
  );
  return response;
};

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

export {
  createPlanetsData,
  createVehiclesData,
  getData,
  postData,
  fetchToken,
  find,
};
