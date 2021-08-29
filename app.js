// const input = document.querySelector('#input');
// const btn = document.querySelector('button.btn');

// btn.onclick = function () {
//   input.select();
//   document.execCommand('copy');

//   alert('Copied!');
// };

const input = document.getElementById("input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    input.select();
    document.execCommand('cut');
    alert("copied!")
})