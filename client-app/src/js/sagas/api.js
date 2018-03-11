import axios from 'axios';
import { call } from 'redux-saga/effects';

// Methods
/* const GET = axios.get; */
/* const POST = axios.post;
const PUT = axios.put;
const DELETE = axios.delete;
 */

// Bases
const apiBase = 'http://10.10.234.249:8080/UAL_ClaimsUIOrchestrator-1.0-SNAPSHOT/v1.0/ClaimsUiOrchestrator/PolicyDetail/';
const auth = 'Basic Q2xhaW1zVWk6Q2xhMW01IXVpIQ==';
const headers = {
  Authorization: auth,
  'Access-Control-Allow-Origin': '*',
};

// Requests
// call(METHOD, ...args)
const policyLookUp = {
  searchPolicy: policyNumber => (
    call(axios.get, `${apiBase}?policyNumber=${policyNumber}`, { headers })
  ),
};

// Calls
const api = {
  policyLookUp,
};

export default api;
