// https://calculator.swiftutors.com/circular-frequency-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const circularFrequencyRadio = document.getElementById('circularFrequencyRadio');
const frequencyRadio = document.getElementById('frequencyRadio');

let circularFrequency;
let frequency = v1;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

circularFrequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Frequency (MHz)';
  frequency = v1;
  result.textContent = '';
});

frequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(ω) Angular Frequency (MHz)';
  circularFrequency = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(circularFrequencyRadio.checked)
    result.textContent = `Angular Frequency = ${computeCircularFrequency().toFixed(2)} MHz`;

  else if(frequencyRadio.checked)
    result.textContent = `Frequency = ${computeFrequency().toFixed(2)} Hz`;
})

// calculation

function computeCircularFrequency() {
  return 2 * Math.PI * Number(frequency.value);
}

function computeFrequency() {
  return Number(circularFrequency.value) / (2 * Math.PI);
}