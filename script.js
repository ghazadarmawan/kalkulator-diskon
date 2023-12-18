function calculate() {
    const usage = parseFloat(document.getElementById('usage').value);
  
    if (isNaN(usage) || usage < 0) {
      alert('Masukkan jumlah pemakaian kWh yang valid.');
      return;
    }
  
    const pricePerKwh = 1352; // Harga per kWh PLN (misalnya)
    const totalCost = usage * pricePerKwh;
  
    displayResult(totalCost);
  }
  
  function displayResult(totalCost) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Biaya listrik yang harus dibayar: Rp ${totalCost.toFixed(2)}`;
  }
  
  
