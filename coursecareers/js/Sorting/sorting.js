// const num = [1,2,3,34,12,50,2,1,2,6];
// const sortedNums = num.sort((a,b) => b - a);
// console.log(sortedNums);
const objs = [
    {year: 2012, make: "Ford"},
    {year: 2001, make: "Chevy"},
    {year: 2023, make: "Honda"},
    {year: 2001, make: "Fiat"}
];

// const sortedObjs = objs.sort((a,b) => b.year - a.year);
const sortedObjs = objs.sort((a,b) => {
    const diffInYear = b.year - a.year;
    if (diffInYear === 0){
        if (a.make > b.make) {
            return 1
        } else if (a.make < b.make) {
            return -1
        } else {
            return 0
        }
    }
    return diffInYear
});
console.log(sortedObjs.reverse())







