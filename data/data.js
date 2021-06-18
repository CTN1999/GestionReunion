
export function getReunion () {
    const url = 'http://demo6254247.mockable.io/reunion'
    return fetch(url)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

export default getReunion

