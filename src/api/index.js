export const apiGet = (url) => () => fetch(url, 
  {
    method: 'GET',
    headers: {
      'app-id': '628c49eebfa6111a3d0072db'
      // 'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(v => v.json())
