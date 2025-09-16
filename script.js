function calculateROI() {
    const tier = document.getElementById('tier').value;
    const investment = parseFloat(document.getElementById('investment').value);
    const roi = parseFloat(document.getElementById('roi').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    let annualReturn = investment * roi;

    if (tier === 'silver') {
        annualReturn *= 1.02;
    } else if (tier === 'gold') {
        annualReturn *= 1.10;
    } else if (tier === 'platinum') {
        annualReturn *= 1.30;
    }

    const totalReturn = annualReturn * years;

    document.getElementById('initial').innerText = investment.toLocaleString();
    document.getElementById('annual').innerText = annualReturn.toFixed(2).toLocaleString();
    document.getElementById('total').innerText = totalReturn.toFixed(2).toLocaleString();
}