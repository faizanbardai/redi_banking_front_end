const axios = require('axios').default;
const api = process.env.VUE_APP_BACK_END_URL;

const registerCustomer = async (customer) => await axios.post(api + 'customer', customer);

exports.registerCustomer = registerCustomer;
