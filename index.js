const countValue = document.querySelector('#counter');
const clear = document.querySelector('#clr');
const range = document.querySelectorAll("input");

const increment = ()=> {
    // get the value from UI
    let value =  parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value
    countValue.innerText =value;

};



const decrement = ()=> {
    // get the value from UI
    let value =  parseInt(countValue.innerText);
     // update the value
    value = value - 1;
    // set the value
    countValue.innerText = value; 

};


function rangeIncrement() {
    if(range[0].value === ""){
      return alert("Give Any Number For Increment!");
    }
    counter.innerText = parseInt(range[0].value) + parseInt(counter.innerText);
    range[0].value = "";
  }
  
  function rangeDecrement() {
    if(range[1].value === ""){
      return alert("Give Any Number For Decrement!");
    }
    counter.innerText = parseInt(counter.innerText) - parseInt(range[1].value);
    range[1].value = "";
  }
  
  clear.onclick = () => counter.innerText = 0;