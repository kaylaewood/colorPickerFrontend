export const apiRequest = async (urlPath, method, data = null) => {
  let options;
  const url = 'https://palettepickerapp.herokuapp.com/api/v1/' + urlPath;

  switch (method) {
    case 'DELETE':
        options = {
          method,
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
          }
        };
      break;
    case 'GET':
      options = data;
      break;
    default:
      options = {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      };
  };

  const response = await fetch(url, options);

  if (response.status === 204) return 'success';

  if (response.ok) return response.json();

};
