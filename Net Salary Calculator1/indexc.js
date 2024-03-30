// write a program whose task is to calculate an individual's Net salary.
// Net salary is calculated by
// (Gross salary=(basic salary + benefits)) - (Deduction(payee + NHIF + NSSF))


// Income Tax Individual Tax Rates Monthly Taxable income
// On the first shs 24,000 Tax rate = 10%
// On the next shs 8,333 Tax = 25%
// On the next shs 467,667 Tax = 30%
// On the next shs 300,000 Tax = 32.5%
// Above 800,000 Tax = 35%


// NHIF
// Up to 5,999                 = 150 shs
// 6,000 - 7,999               = 300 shs
// 8,000 - 11,999              = 400 shs
// 12,000 - 14,999             = 500 shs
// 15,000 - 19,999             = 600 shs
// 20,000 - 24,999             = 750 shs
// 25,000 - 29,999             = 850 shs
// 30,000 - 34,999             = 900 shs
// 35,000 - 39,999             = 950 shs
// 40,000 - 44,999             = 1,000 shs
// 45,000 - 49,999             = 1,100 shs
// 50,000 - 59,999             = 1,200 shs
// 60,000 - 69,999             = 1,300 shs
// 70,000 - 79,999             = 1,400 shs
// 80,000 - 89,999             = 1,500 shs
// 90,000 - 99,999             = 1,600 shs
// Above 100,000               = 1,700 shs



// NSSF Rates
// Nssf deduction rate of 5%
// Maximum Nssf rate amount is 2000 shs


document.getElementById("enteramount").onclick = function() {

let basicSalary = parseFloat(document.getElementById("basicsalaryamount").value);

let benefits = parseFloat(document.getElementById("benefitsamount").value);

let gross = basicSalary + benefits;


function payeRate(gross) {

    if (gross< 24000){
        return 0;
    }else if (gross = 24000) {
       return (gross * 0.1);
    }else if ( gross <= 32333) {
        return ((gross - 24000) * 0.25);
    }else if (gross <= 467667) {
        return ((gross - 32334) * 0.3);
    }else if (gross <= 799999) {
        return ((gross -467668) * 0.325)
    }else if (gross > 800000) {
        return ((gross - 800000) * 0.35)
    }else  {
        return "Invalid input";
}
}
// calculate nssf

function nssfRate(gross) {

    if (gross > 0 && gross < 40000) {
        return gross * 0.05
    }else if (gross >= 40000) {
        return 2000
    }else {
        return "Invalid input";
}
}
// calculate nhif 
function nhifRate(gross) {
    if (gross <= 5999) {
    return 150;
    }else if (gross >= 6000 && gross <= 7999) {
        return 300;
    }else if (gross >= 8000 &&   gross <= 11999) {
        return 400;
    }else if (gross >= 12000 && gross <= 14999) {
        return 500;
    }else if (gross >= 15000 && gross <= 19999) {
        return 600;
    }else if (gross >= 20000 && gross <= 24999) {
        return 750;
    }else if (gross >= 25000 && gross <= 29999) {
        return 850;
    }else if (gross >= 30000 && gross <= 34999) {
        return 900;
    }else if (gross >= 35000 && gross <= 39999) {
        return 950;
    }else if (gross >= 40000 && gross <= 44999) {
        return 1000;
    }else if (gross >= 45000 && gross <= 49999) {
        return 1100;
    }else if (gross >= 50000 && gross <= 59999) {
        return 1200;
    }else if (gross >= 60000 && gross <= 69999) {
        return 1300;
    }else if (gross >= 70000 && gross <= 79999) {
        return 1400;
    }else if (gross >= 80000 && gross <= 89999) {
        return 1500;
    }else if (gross >= 90000 && gross <= 99999) {
        return 1600;
    }else if (gross > 100000){
        return 1700;
    }else {
        return 'Invalid input';
  }
}
let paye = payeRate(gross);
let nhif = nhifRate(gross);
let nssf = nssfRate(gross);

function totalDeduction(gross) {
    return (paye + nhif + nssf)
}
let deductions = totalDeduction(gross)

function netSalary(gross, totalDeduction) {
    return (gross - deductions)
}
let Netsalary = netSalary(gross, deductions);
document.getElementById("netSalaryamount").textContent = `Net Salary: ${Netsalary}`;
}
