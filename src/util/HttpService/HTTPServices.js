import axios from 'axios';

  const HTTPServices = async (url, method, data) => {
    try {
      let result = await axios({
        method,
        url,
        data,
        headers: { 'X-Custom-Header': 'X-Header-Value' }
      });
      return result.data;
    } catch (error) {
      console.log('Http Error', error);
      return 'Call failed';
    }
  };

  export default HTTPServices