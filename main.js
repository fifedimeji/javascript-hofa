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

// Traditional for loop approach (commented out)
// This is the old way to iterate through arrays before modern methods
// for(let i = 0; i < companies.length; i++){
// console.log(companies[i])
// }

// forEach method examples
// forEach executes a function for each array element but doesn't return anything

// forEach with traditional function syntax
// Takes each company object and logs only the name property
companies.forEach(function(company){
console.log(company.name)
})

// forEach with arrow function syntax (more concise)
// Does the same thing as above but with modern ES6 arrow function
companies.forEach(company => console.log(company.name))

// filter method examples
// filter creates a new array with elements that pass a test condition

// Filter ages to find people who can legally drink (21 and over in the US)
// Returns a new array containing only ages >= 21
const canDrink = ages.filter(age => age >= 21 )
console.log(canDrink)

// Filter companies to find only retail businesses
// Returns array of company objects where category equals 'Retail'
const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies)

// Filter companies that started in the 1980s (1980-1989)
// Uses logical AND (&&) to check if start year is between 1980 and 1989
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
console.log(eightiesCompanies)

// Filter companies that operated for at least 10 years
// Calculates business duration by subtracting start year from end year
const lastedTenYears = companies.filter(company => company.end - company.start >= 10)
console.log(lastedTenYears)

// map method examples
// map creates a new array by transforming each element with a function

// Extract and log company names (Note: console.log returns undefined)
const companyNames = companies.map(company => console.log(company.name))

// Create formatted strings showing company name and years of operation
// Template literals (backticks) allow embedding expressions in strings
const testMap = companies.map(company => console.log(`${company.name} [${company.start} - ${company.end}]`))

// Calculate and log square root of each age
// Math.sqrt() returns the square root of a number
const sqrtAges = ages.map(age => console.log(Math.sqrt(age)))

// Double each age and log the result
// Simple multiplication transformation
const agesTimesTwo = ages.map(age => console.log(age * 2))

// Chained map operations: first get square root, then double the result
// First map gets square root, second map doubles those values
const sqrtAgesTimesTwo = ages
.map(age => (Math.sqrt(age)))
.map(age => console.log(age * 2))

// sort method examples
// sort modifies the original array and returns the sorted array

// Sort companies by start year in ascending order
// Compare function: if a.start > b.start, return 1 (a comes after b)
// Otherwise return -1 (a comes before b)
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies)

// Sort ages in ascending order (lowest to highest)
// For numbers: a - b gives ascending order, b - a gives descending
const sortAges = ages.sort((a, b) => a - b)
console.log(sortAges)

// reduce method examples
// reduce processes array elements to produce a single value

// Sum all ages using reduce
// total is the accumulator, age is current element
// 0 is the initial value for the accumulator
const agesSum = ages.reduce((total, age) => total + age, 0)
console.log(agesSum)

// Calculate total years all companies were in business
// For each company, add (end year - start year) to running total
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)

// Complex chained operation combining multiple array methods
// 1. map: Double each age (age * 2)
// 2. filter: Keep only values >= 40
// 3. sort: Sort remaining values in ascending order
// 4. reduce: Sum all the remaining values
const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((total, age) => total + age, 0)
console.log(combined)