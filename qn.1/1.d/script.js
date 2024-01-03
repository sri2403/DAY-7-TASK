//1.d) Print the total population of countries using reduce function

const url="https://restcountries.com/v3.1/all";
const  xhr=new XMLHttpRequest();
xhr.open("get",url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    const total=data.reduce((accumulator, country) => {
        const population=country.population;
        return accumulator + population;
    },0);
    console.log(total);
}