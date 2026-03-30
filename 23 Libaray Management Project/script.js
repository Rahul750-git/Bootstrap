// let form = document.getElementById("myform");
// let tbody = document.getElementById("data");

// let c = 0;
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let book = document.getElementById("book").value.trim();
//   let author = document.getElementById("author").value.trim();
//   let category = document.getElementById("category").value.trim();
//   if (book && author && category) {
//     c++;
//     let row = document.createElement("tr");
//     row.innerHTML = `
//             <td>${c}</td>
//             <td>${book}</td>
//             <td>${author}</td>
//             <td>${category}</td>
//             <td><button class="btn btn-danger text-light" onclick="this.parentElement.parentElement.remove()">Delete</button></td>
//         `;
//     tbody.append(row);
//     form.reset();
//   }
// });

const form = document.querySelector("#myForm");
let tbody = document.getElementById("data");
let c = 0;

document.addEventListener('DOMContentLoaded', 
    (e) => { 
       e. preventDefault(); // This stops the page from refreshing

    let book = document.getElementById("book").value.trim();
    let author = document.getElementById("author").value.trim();
    let category = document.getElementById("category").value.trim();

    if (book && author && category) {
        c++;
        let row = document.createElement("tr");

        // Ensure the backticks wrap the entire HTML block
        row.innerHTML = `
            <td>${c}</td>
            <td>${book}</td>
            <td>${author}</td>
            <td>${category}</td>
            <td><button class="btn btn-danger text-light">Delete</button></td>
        `;

        tbody.append(row); // This adds the new row to your table
    }
});
