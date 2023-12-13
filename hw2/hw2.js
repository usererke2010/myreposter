const arr = Array()
// 1

const marr = Array(6).fill('a')
alert(marr)
// 2

let marrlen = marr.length -1
alert(marrlen)
// 3

let getmarrlen = [marr[0],marr[2],marr[4]]
alert(getmarrlen)
// 4

let mixDataTypes = ['a',1,'b',2,'c',3,'d']
let searchLength = mixDataTypes.length -1
alert(searchLength)
// 5

let itCompaniess = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompaniess)
// 6

let kol = itCompaniess.length 
alert('itCompanies quantity is:' + ' ' + kol)
// 7

let getitcomp = [itCompaniess[0], itCompaniess[3], itCompaniess[6]]
alert(getitcomp)
// 8

eachcomp1 = itCompaniess[0]
eachcomp2 = itCompaniess[1]
eachcomp3 = itCompaniess[2]
eachcomp4 = itCompaniess[3]
eachcomp5 = itCompaniess[4]
eachcomp6 = itCompaniess[5]
eachcomp7 = itCompaniess[6]
// 9

alert(eachcomp1)
alert(eachcomp2)
alert(eachcomp3)
alert(eachcomp4)
alert(eachcomp5)
alert(eachcomp6)
alert(eachcomp7)
// 10
12
let itCompanie0 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let sentence = `${itCompanies0.join(', ')} are big IT companies.`;
console.log(sentence);
13
let itCompanies1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let companyToCheck = 'Microsoft';
if (itCompanies1.includes(companyToCheck)) {
  console.log(`${companyToCheck} ат компанияларының массивінде бар.`);
} else {
  console.log(`${companyToCheck} ат компанияларының массивінде жок.`);
}
14
let itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let companiesWithOneO = [];
for (let i = 0; i < itCompanies2.length; i++) {
  let company = itCompanies2[i];
  let oCount = 0;
  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
      oCount++;
    }
  }
  if (oCount <= 1) {
    companiesWithOneO.push(company);
  }
}
console.log('Companies with at most one "o":', companiesWithOneO);
15
let itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies3.sort();
console.log('Sorted IT companies:', itCompanies3);
16
let itCompanies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies4.reverse();
console.log('Reversed IT companies:', itCompanies4);
17
let itCompanies5 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let firstThreeCompanies = itCompanies5.slice(0, 3);
console.log('First three IT companies:', firstThreeCompanies);
18
let itCompanies6 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let lastThreeCompanies = itCompanies6.slice(-3);
console.log('Last three IT companies:', lastThreeCompanies);
19
let itCompanies7 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let middleIndex = Math.floor(itCompanies7.length / 2);
let middleCompanies;
if (itCompanies7.length % 2 === 0) {
  middleCompanies = itCompanies7.slice(middleIndex - 1, middleIndex + 1);
} else {
  middleCompanies = [itCompanies7[middleIndex]];
}

console.log('Middle IT company or companies:', middleCompanies);
20
 let itCompanies8 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let removedCompany = itCompanies8.shift();
console.log('Removed IT company:', removedCompany);
console.log('Updated IT companies array:', itCompanies8);

