const quotes = [
 "The best way to predict the future is to invent it.",
 "Dream big and dare to fail.",
 "Code is like humor. When you have to explain it, it’s bad.",
 "In order to be irreplaceable, one must always be different.",
 "Simplicity is the soul of efficiency."
];
document.getElementById("newQuote").addEventListener("click", function() {
 const randomIndex = Math.floor(Math.random() * quotes.length);
 document.getElementById("quote").textContent = quotes[randomIndex];
});