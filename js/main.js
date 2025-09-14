// 🔗 BSP Webhook placeholder (edit once real URL is ready)
const BSP_WEBHOOK_URL = "https://your-bsp-webhook-url-here";

// 📤 Send payloads to BSP (profile + usage events)
function sendToBSP(payload) {
  if (!BSP_WEBHOOK_URL || BSP_WEBHOOK_URL.includes("placeholder")) {
    console.warn("⚠️ BSP webhook URL not set. Skipping send.", payload);
    return;
  }

  fetch(BSP_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => console.log("BSP webhook response:", res.status))
  .catch(err => console.error("BSP webhook error:", err));
}

// 📄 Export any element to PDF
function downloadPDF(elementId, filename = "Aura_Report.pdf") {
  const element = document.getElementById(elementId);
  html2pdf().set({
    margin: 0.5,
    filename: filename,
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  }).from(element).save();
}

// 🔑 BYOK check
function getOpenAIKey() {
  const openaiKey = localStorage.getItem("openaiKey");
  if (!openaiKey) {
    alert("⚠️ No API key found. Please go to the BYOK page and add your key.");
    return null;
  }
  return openaiKey;
}
