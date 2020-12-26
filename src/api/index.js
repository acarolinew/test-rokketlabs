export const apiGet = (url) => () => fetch(url, 
  {
    method: 'GET',
    headers: {
      'app-id': '5fe75b4888493e62c77c392f'
      // 'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(v => v.json())