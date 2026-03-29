// $(document).ready(function () {
//   var count = 0;
//   $("#addbook").click(function (e) {
//     e.preventDefault();
//     var book = $("#book").val();
//     var author = $("#author").val();
//     var category = $("#category").val();
//     if (book == "" || author == "" || category == "") {
//       alert("Please fill all the fields");
//     } else {
//       var newRow = $("#data").append(
//         "<tr><td>" +
//           count++ +
//           "</td><td>" +
//           book +
//           "</td><td>" +
//           author +
//           "</td><td>" +
//           category +
//           "</td><td><button class='btn btn-danger remove'>Remove</button></td></tr>",
//         $("#myform").trigger("reset"),
//       );
//       $(".remove").click(function () {
//         $(this).closest("tr").remove();
//       });
//     }
//   });
// });
