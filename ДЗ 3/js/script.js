'use strict'

let I =  {
firstName : 'Alex',
lastName : 'Dubina',
coins : 200,
"дата народження" : {
   day : 27,
   Month : 9,
   Year :2006,
},
age2010 : 4, age2011 : 5, age2012 : 6, age2013 : 7, age2014 : 8, age2015 : 9,
age2016 : 10, age2017 : 11, age2018 : 12, age2019 : 13, age2020 : 14, age2033 : 27,
}
const I1 = Object.entries(I) 
const birth = Object.entries(["дата народження"])
let date = birth.flat()

const deletedTxt = date.splice(0, 1) + date.splice(1, 1) + date.splice(2, 1)
 date = date.join('/')
 
 for(let i = 0; i <- I1.length - 1; i++){
    if(i === 3){
       console.log(I)[3] + date + '/ '
    }else{
       console.log(I1[i].join('/ '))
    }
 }
  