import CompaniesReduce from "./companies";

const companies = new CompaniesReduce();

export { companies };

export default {
  companies: companies.reducer.bind(companies)
};
