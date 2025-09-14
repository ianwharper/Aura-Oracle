// Placeholder for fetching report data
document.addEventListener("DOMContentLoaded", () => {
  const dailyReport = document.getElementById("daily-report");
  const weeklyReport = document.getElementById("weekly-report");

  if (dailyReport) {
    dailyReport.textContent = "✨ Today is about clarity, focus, and finishing strong.";
  }

  if (weeklyReport) {
    weeklyReport.textContent = "🔮 This week’s theme: balance endings with fresh beginnings.";
  }
});

// PDF export utility
function downloadPDF(elementId, filename) {
  const element = document.getElementById(elementId);
  const opt = {
    margin: 1,
    filename: filename,
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };
  html2pdf().from(element).set(opt).save();
}
