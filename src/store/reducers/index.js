import {
    combineReducers
} from 'redux';
import contacts from './contacts';
import CompaniesReduce from './companies';

const companies = new CompaniesReduce()

export default combineReducers({
    contacts,
    companies: companies.reducer
});

export {
    contacts,
    companies
}
