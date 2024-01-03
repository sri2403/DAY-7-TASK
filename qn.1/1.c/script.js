//1.c) Print the following details name, capital, flag, using forEach function

const url="https://restcountries.com/v3.1/all";
const  xhr=new XMLHttpRequest();
xhr.open("get",url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    data.forEach(country => {
        const names=country.name.common;
        const capitals=country.capital;
        const flags=country.flags.png;
        console.log(`
        name :${names}
        cap  :${capitals}
        flag :${flags}`);
    });
} 