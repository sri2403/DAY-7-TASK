//1.e)Print the country that uses US dollars as currency.

const url="https://restcountries.com/v3.1/all";
const  xhr=new XMLHttpRequest();
xhr.open("get",url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    const dollarCountry=data.filter(country=>country.currencies?.USD);
    console.log(dollarCountry);
}