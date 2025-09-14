document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const profile = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    dob: document.getElementById("dob").value,
    tob: document.getElementById("tob").value,
    pob: document.getElementById("pob").value,
  };

  console.log("Profile saved:", profile);

  // Local save for now
  localStorage.setItem("userProfile", JSON.stringify(profile));

  alert("Profile saved successfully!");
});
