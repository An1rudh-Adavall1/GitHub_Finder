let git = new gitHub();
console.log(git);
const ui = new UI();
const search = document.getElementById("searchUser").addEventListener("keyup", myFunction);
function myFunction() {
  let userName = document.getElementById("searchUser").value;

  if (userName != "") {
    git.getUsers(userName).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not Found", "alert alert-danger");

        console.log(data);
      } else {
        ui.showUserData(data.profile);
      }
    });
  } else {
    ui.clearProfile();
  }
}
