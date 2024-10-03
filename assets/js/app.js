const input = document.querySelector(".input");
const inputIcon = document.querySelector(".fa-x");
const Create = document.querySelector(".btn");
const form = document.querySelector(".form");
const bodyEl = document.querySelector(".body_task");




inputIcon.addEventListener("click", () => {

    input.value = "";
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const divEl = document.createElement("div");
    const pEl = document.createElement("p");
    const btnDiv = document.createElement("div");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const btn4 = document.createElement("button");


    pEl.innerText = input.value;






    divEl.className = "card"
    btnDiv.className = "btn_ota"
    btn1.className = "row"
    btn2.className = "row2"
    btn3.className = "row3 "
    btn4.className = "row4"

    btn1.innerHTML = '<i class="fa-regular fa-circle-check"></i> Confirm'
    btn2.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> Edit'
    btn3.innerHTML = '<i class="fa-regular fa-clock"></i> 10:05:42'
    btn4.innerHTML = '<i class="fa-solid fa-trash"></i> Delete'




    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);
    btnDiv.appendChild(btn3);
    btnDiv.appendChild(btn4);
    divEl.appendChild(btnDiv)
    divEl.appendChild(pEl);
    divEl.appendChild(btnDiv);
    bodyEl.appendChild(divEl);


    input.value = "";

})