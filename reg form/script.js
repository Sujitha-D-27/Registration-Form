
document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const displayData = document.getElementById("displayData");
    const clearButton = document.getElementById("clearButton");
  
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const data = new FormData(registrationForm);
      const name = data.get("name");
      const email =data.get("email");
      const gender =data.get("gender");
      const skills = data.getAll("skills").join(", ");
      const link = data.get("link");
  
      displayData.innerHTML = `
              <h2>Enrolled Data</h2>
              <table>
                  <tr>
                      <td>Name</td><td>${name}</td>
                  </tr>
                  <tr>
                      <td>Email</td><td>${email}</td>
                  </tr>
                  <tr>
                      <td>Gender</td><td>${gender}</td>
                  </tr>
                  <tr>
                      <td>Skills</td><td>${skills}</td>
                  </tr>
                  <tr>
                      <td>Link</td><td><a href="">${link}</a></td>
                  </tr>
              </table>
          `;
    });
  
    clearButton.addEventListener("click", () => {
      registrationForm.reset();
      displayData.innerHTML = "";
    });
  });