/*function countSmekery() {
    for(let i = 1; i <= 3; i++) {
      alert("Смерека номер " + i);
    }
  }

 window.addEventListener("resize", myFunction);var x = 0;
 function myFunction() {
   var text = x += 1;
   document.getElementById("chislo").innerHTML = text;
 }
 */

//TASK1

var CountryList = [

  {
  
   country: "Україна",
  
   capital:"Київ",
   count: 40000000
  
  },
  
  {
  
   country: "Грузія",
  
   capital:"Тбілісі",
  
  count: 10000000
  
  },
  
  {
  
   country: "Великобританія",
  
   capital:"Лондон",
   count: 100000000
  
  },
  
  {
  
   country: "США",
  
   capital:"Вашингтон",
  
  count: 300000000
  
  }];
  function count() {
    let list = document.getElementById('result');
    let krainu = [];
    for( i = 0; i < CountryList.length; i++) {
      let item = document.createElement('li');
      country = `Країна: ${CountryList[i].country}`;
      population = `Населення:${CountryList[i].count / 1000000} млн`;
      capital =  `Стлиця: ${CountryList[i].capital}`;
      item.innerText = `${country} ${capital} ${population}`;
      list.appendChild(item); 
      if(CountryList[i].country === "Україна") country.style.color = "red";
}
}
  
count();


//TASK2

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

//TASK3
let node = null;
let a = prompt('Введіть колір')

window.onload = function () {
    let list = document.getElementById("list");
    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.innerText = `Новий айтем ${i + 1}`;
        list.appendChild(li);
    }
};

function selectFirst() {
    let list = document.getElementById("list");
    let child = list.firstChild;
    if (child !== null) {
        child.style.color = a;
    }
}

function selectLast() {
    let list = document.getElementById("list");
    let child = list.lastChild;
    if (child !== null) {
        child.style.color = a;
    }
}

function selectNext() {
    reset();
    if (node === null) {
        let list = document.getElementById("list");
        node = list.firstChild;
        node.style.color = a;
        return;
    }
    node = node.nextSibling;
    if (node !== null) {
        node.style.color = a;
    }
}

function selectPrev() {
    reset();
    if (node === null) {
        let list = document.getElementById("list");
        node = list.lastChild;
        node.style.color = a;
        return;
    }
    node = node.previousSibling;
    if (node !== null) {
        node.style.color = a;
    }
}

function reset() {
    let countList = document.getElementsByTagName("li");
    for (let i = 0; i < countList.length; i++) {
        countList[i].setAttribute("style", "color:black");
    }
}

function createNew() {
    let list = document.getElementById("list");
    let item = document.createElement("li");
    let countList = document.getElementsByTagName("li");

    item.innerHTML = `Новий айтем ${countList.length + 1}`;
    list.appendChild(item);
}

function removeLast() {
    let list = document.getElementById("list");
    let item = list.lastChild;
    if (item !== null) {
        list.removeChild(item);
    }
}

