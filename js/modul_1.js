document.getElementById('redirectButton').addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(function() {
        window.location.href = 'module/module1.html';
    }, 1000);
});

function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
    var num3 = parseFloat(document.getElementById('num3').value) || 0;
    var num4 = parseFloat(document.getElementById('num4').value) || 0;
    
    var sum = num1 + num2 + num3 + num4;
    document.getElementById('result').textContent = 'Sum: ' + sum;
}