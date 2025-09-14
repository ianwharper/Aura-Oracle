document.getElementById("byokForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const key = document.getElementById("openaiKey").value;

  if (!key.startsWith("sk-")) {
    alert("⚠️ Please enter a valid OpenAI API key.");
    return;
  }

  localStorage.setItem("openaiKey", key);

  alert("✅ Your API key has been saved locally!");
});
