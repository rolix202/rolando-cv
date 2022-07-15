const CHECKBOX = document.getElementById('checkbox');
const wrapper = document.getElementById('wrappers');
let backgroundColor = wrapper.style.backgroundColor;
console.log(backgroundColor);
// CHECKBOX.addEventListener('change', themeChange)

// function themeChange() {
//     document.body.classList.toggle("darkTheme");

//     document.querySelectorAll('.title1 h2').forEach(h2 => {
//         h2.style.color = '#fff';
//     })
// }

// if (!change){
//     document.querySelectorAll('.title1 h2').forEach(h2 => {
//         h2.style.color = '#7f298c';
//     })
// }
wrapper.addEventListener('change', toggler)
function toggler(){
   
}