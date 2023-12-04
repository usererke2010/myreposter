const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));
const uppercasedCountries = countries.map(country => country.toUpperCase());
const countriesLength = countries.map(country => country.length);
const squaredNumbers = numbers.map(number => number ** 2);
const uppercasedNames = names.map(name => name.toUpperCase());
const productPrices = products.map(product => product.price);
const countriesWithoutLand = countries.filter(country => !country.includes('land'));
const sixCharacterCountries = countries.filter(country => country.length === 6);
const sixLettersOrMoreCountries = countries.filter(country => country.length >= 6);
const countriesNotStartingWithE = countries.filter(country => !country.startsWith('E'));
const validPrices = products.filter(product => typeof product.price === 'number' && product.price !== '');
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const concatenatedCountries = countries.reduce((sentence, country, index, array) => {
  return sentence + country + (index === array.length - 1 ? '' : ', ') + (index === array.length - 2 ? 'and ' : '');
}, '');
const hasNameWithLengthGreaterThanSeven = names.some(name => name.length > 7);
const allCountriesContainLand = countries.every(country => country.includes('land'));
const firstSixLetterCountry = countries.find(country => country.length === 6);
const indexFirstSixLetterCountry = countries.findIndex(country => country.length === 6);
const indexNorway = countries.findIndex(country => country === 'Norway');
const indexRussia = countries.findIndex(country => country === 'Russia'); // Returns -1 if not found.
