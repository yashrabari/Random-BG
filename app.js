var container = document.querySelector('.container')
var btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    var letters = "0123456789ABCDEF";
    var color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)] 
    }
    container.style.backgroundColor = color
    copy(color)
    console.log(color);
})

function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    alert('copied to clipboard')
    return result;
 }