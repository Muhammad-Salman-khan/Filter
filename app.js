let Input = document.getElementById("searchInput");
let row = document.getElementsByTagName("tr");
let body = document.getElementsByTagName("tableBody");

const on = () => {
  let Filter = Input.value.toLowerCase();
  for (let i = 0; i < row.length; i++) {
    let txtValue = row[i].textContent;
    if (txtValue.toLowerCase().includes(Filter)) {
      row[i].style.display = "";
    } else {
      row[i].style.display = "none";
    }
  }
};
