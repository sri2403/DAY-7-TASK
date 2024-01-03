// 1.a) Get all the countries from Asia continent /region using Filter function

const url="https://restcountries.com/v3.1/all";
const  xhr=new XMLHttpRequest();
xhr.open("get",url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    const asianCountries=data.filter(country=>country.continents.includes("Asia"));
    console.log(asianCountries);
}