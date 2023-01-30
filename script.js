// const form = document.querySelector("form");
// const nameForm = document.querySelector("#name");
// const emailForm = document.querySelector("#email");
// const messageForm = document.querySelector("#message");

// action="https://script.google.com/macros/s/AKfycbwoDuo3lHfa6ky9Vs3D-VeYBX4ak2rI6TcCrhvf5FZPFXjQ9qajtcL8swDvNom3yj8/exec" method="post"

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const name = nameForm.value
//     const email = emailForm.value
//     const message = messageForm.value

//     console.log(`Selected name: ${name}`);
//     console.log(`Selected email: ${email}`);
//     console.log(`Selected message: ${message}`);

//     fetch("https://script.google.com/macros/s/AKfycbwoDuo3lHfa6ky9Vs3D-VeYBX4ak2rI6TcCrhvf5FZPFXjQ9qajtcL8swDvNom3yj8/exec", {
//         method: "POST",
//         headers: {
//             // "Content-Type": "application/json",
//             'Content-Type': 'text/plain;charset=utf-8',
//         },
//         body: JSON.stringify({
//             name,
//             email,
//             message,
//         }),
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Success:", data);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
// })