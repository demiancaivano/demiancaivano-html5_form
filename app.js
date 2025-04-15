const formulario = document.getElementById('miFormulario');
const cartel = document.getElementById('cartelDeAlerta');
const btnCancelar = document.getElementById('btnCancelar');

cartel.style.display = 'none';

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const card = document.getElementById('inputCard').value.trim();
  const cvc = document.getElementById('inputCVC').value.trim();
  const amount = document.getElementById('inputAmount').value.trim();
  const name = document.getElementById('inputName').value.trim();
  const city = document.getElementById('inputCity').value.trim();
  const lastName = document.getElementById('inputLastName').value.trim();
  const postal = document.getElementById('inputPostal').value.trim();
  const state = document.getElementById('states').value;
  
 
  const paymentMethods = document.querySelectorAll('input[name="paymentMethods"]');
  const paymentSelected = Array.from(paymentMethods).some(radio => radio.checked); 

 
  if (
    card === '' ||
    cvc === '' ||
    amount === '' ||
    name === '' ||
    city === '' ||
    lastName === '' ||
    postal === '' ||
    state === '' ||
    !paymentSelected 
  ) {
    cartel.style.display = 'block';
  } else {
    cartel.style.display = 'none';
    console.log('Formulario válido. Enviando...');
    formulario.submit(); 
  }
});

btnCancelar.addEventListener('click', () => {
  formulario.reset();
  cartel.style.display = 'none';
});