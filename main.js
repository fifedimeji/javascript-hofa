const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
]

const ages = [33, 24, 20, 22, 64, 48, 18, 16, 24, 37, 30, 45, 56, 5]

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i])
// }

// forEach...
companies.forEach(function(company){
    console.log(company.name)
})

companies.forEach(company => console.log(company.name))

// filter...
const canDrink = ages.filter(age => age >= 21 )
console.log(canDrink)

const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies)

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
console.log(eightiesCompanies)

const lastedTenYears = companies.filter(company => company.end - company.start >= 10)
console.log(lastedTenYears)

 
// map...
const companyNames = companies.map(company => console.log(company.name))

const testMap = companies.map(company => console.log(`${company.name} [${company.start} - ${company.end}]`))

const sqrtAges = ages.map(age => console.log(Math.sqrt(age)))

const agesTimesTwo = ages.map(age => console.log(age * 2))

const sqrtAgesTimesTwo = ages
.map(age => (Math.sqrt(age)))
.map(age => console.log(age * 2))

// sort
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies)

 const sortAges = ages.sort((a, b) => a - b)
 console.log(sortAges)
// reduce
const agesSum = ages.reduce((total, age) => total + age, 0)
console.log(agesSum)

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((total, age) => total + age, 0)

console.log(combined)
 