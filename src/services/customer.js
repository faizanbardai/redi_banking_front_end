const axios = require('axios').default;
const api = process.env.VUE_APP_BACK_END_URL + 'customer/';

const registerCustomer = async (customer) => await axios.post(api + 'register', customer);

const loginCustomer = async (customer) => await axios.post(api + 'login', customer);

const getCustomerByToken = async (token) => await axios.get(api + 'data', { headers: { token: token } });

const getBankAccounts = async (token) => await axios.get(api + 'bank-accounts', { headers: { token: token } });

const createBankAccount = async (token, account) =>
    await axios.post(api + 'create-bank-account', account, { headers: { token: token } });

const deposit = async (token, account) => await axios.post(api + 'deposit', account, { headers: { token: token } });

const withdraw = async (token, account) => await axios.post(api + 'withdraw', account, { headers: { token: token } });

exports.registerCustomer = registerCustomer;
exports.loginCustomer = loginCustomer;
exports.getCustomerByToken = getCustomerByToken;
exports.getBankAccounts = getBankAccounts;
exports.createBankAccount = createBankAccount;
exports.deposit = deposit;
exports.withdraw = withdraw;
