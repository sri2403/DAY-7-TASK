//1.b) Get all the countries with a population of less than 2 lakhs using Filter function

const url="https://restcountries.com/v3.1/all";
const  xhr=new XMLHttpRequest();
xhr.open("get",url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    const popless2lakhs=data.filter(country=>country.population<200000);
    console.log(popless2lakhs);
    
}