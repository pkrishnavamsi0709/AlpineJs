const axios = require("axios");

const fetchData = async (id) =>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);


    return response.data;
}

fetchData(1);

module.exports = fetchData;