const item_list = document.querySelectorAll('.apple_item'); 

console.log(item_list[1].innerText); 

item_list.forEach((item, index)=> {
  item.style.color = "red"; 
if (index === 1) {
  item.parentElement.remove(); 
}

})
const item_list = document.querySelectorAll('.apple_item');

item_list.forEach((item) => {
  item.addEventListener('click', () => {
   
  });
});
const button =document.querySelector('form button');
const div =document.querySelector('form div:nth-child(2)');
const form =document.querySelector('form');
button.addEventListener('click',(e) =>{
alert('Button was licked')
e.sopPropagation();

});
div.addEventListener('click', () =>{
  alert('Div was clicked')
})
form.addEventListener('click', () =>{
  alert('Div was form')
})
const form = document.getElementById('item_form');

function onSubmit(e){
  e.preventDefault();
  const item = document.getElementById('item_form').value;
  const priorty = document.getElementById('priorty');
  if (item ===''|| priorty==='0'){
    alert('please fill in all fields');
    return;
  }
  console.log('item, priority.value');
}
form,addEventListener('submit', onsubmit);
const itemform = document.getElementById('item_form');
const priority = document.getElementById('priority');
const recurring = document.getElementById('recurring');
const heading = document.querySelector(h1);

function onInput(e){
  heading.context(target.value)
}
itemform.addEventListener('input', onInput);
