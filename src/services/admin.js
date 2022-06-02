const axios = require('axios').default;
const api = process.env.VUE_APP_BACK_END_URL + 'admin/';

const loginAdmin = async (admin) => await axios.post(api + 'login', admin);

const getAllCustomers = async (token) => await axios.get(api + 'customers', { headers: { token: token } });

exports.loginAdmin = loginAdmin;
exports.getAllCustomers = getAllCustomers;
