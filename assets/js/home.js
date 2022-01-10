// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;

// var $ = jQuery = require('jquery')(window);

// const checked=document.querySelector('.mycheckbox:checked')!==null;
// console.log(checked); // false
// false

setInterval(function(){
  const checked=document.querySelector('.mycheckbox:checked')!==null;
  
  if(checked){
    console.log(); 
  }
},10)
console.log('JS LOADED');