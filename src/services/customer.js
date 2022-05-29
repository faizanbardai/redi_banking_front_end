const axios = require('axios').default;
const api = process.env.VUE_APP_BACK_END_URL + 'customer/';

const registerCustomer = async (customer) => await axios.post(api + 'register', customer);

const loginCustomer = async (customer) => await axios.post(api + 'login', customer);

const getCustomerByToken = async (token) => await axios.get(api + 'data', { headers: { token: token } });

exports.registerCustomer = registerCustomer;
exports.loginCustomer = loginCustomer;
exports.getCustomerByToken = getCustomerByToken;
