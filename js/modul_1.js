document.getElementById('redirectButton1').addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(function() {
        window.location.href = 'module/module1.html';
    }, 1000);
});

function calculateMult1() {
    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
    var num3 = parseFloat(document.getElementById('num3').value) || 0;
    var num4 = parseFloat(document.getElementById('num4').value) || 0;
    var num5 = parseFloat(document.getElementById('num5').value) || 0;
    var num6 = parseFloat(document.getElementById('num6').value) || 0;
    var num7 = parseFloat(document.getElementById('num7').value) || 0;
    var num8 = parseFloat(document.getElementById('num8').value) || 0;
    
    var Multiplication = num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8;
    document.getElementById('result1').textContent = 'Multiplication = ' + Multiplication;
}

function calculationMult2() {
    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
    var num3 = parseFloat(document.getElementById('num3').value) || 0;
    var num4 = parseFloat(document.getElementById('num4').value) || 0;
    var num5 = parseFloat(document.getElementById('num5').value) || 0;
    var num6 = parseFloat(document.getElementById('num6').value) || 0;
    var num7 = parseFloat(document.getElementById('num7').value) || 0;
    var num8 = parseFloat(document.getElementById('num8').value) || 0;

    var Multiplication = [num3 * num8 * 0.9*(num6 * 1000 - num7)]/1000000;
    document.getElementById('result2').textContent = 'Mrd [kNm/m] = ' + Multiplication;
}

function calculationMult3() {
    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
    var num3 = parseFloat(document.getElementById('num3').value) || 0;
    var num4 = parseFloat(document.getElementById('num4').value) || 0;
    var num5 = parseFloat(document.getElementById('num5').value) || 0;
    var num6 = parseFloat(document.getElementById('num6').value) || 0;
    var num7 = parseFloat(document.getElementById('num7').value) || 0;
    var num8 = parseFloat(document.getElementById('num8').value) || 0;

    var Multiplication = [1/(1+(1.0*num3/205000)*(num6 * 1000 - num7)*1.0)*num2*(num6 * 1000 - num7)];
    document.getElementById('result3').textContent = 'Vrd [kN/m] = ' + Multiplication;
}
function goBack() {
    window.location.href = '../index.html';
}