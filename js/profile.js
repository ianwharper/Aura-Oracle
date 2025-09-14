document.getElementById("profileForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value;
  const tob = document.getElementById("tob").value;
  const pob = document.getElementById("pob").value;

  // Save to localStorage
  localStorage.setItem("dob", dob);
  localStorage.setItem("tob", tob);
  localStorage.setItem("pob", pob);

  // Update status
  document.getElementById("status").innerText = "✅ Profile saved locally.";

  // (Future) Send to BSP via webhook
  // fetch("https://your-bsp-webhook.com", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ dob, tob, pob })
  // });
});
