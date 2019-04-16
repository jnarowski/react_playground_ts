import {
    combineReducers
} from 'redux';
import CompaniesReduce from './companies';

const companies = new CompaniesReduce()

export default combineReducers({
    companies: companies.reducer
});

export {
    companies
}
