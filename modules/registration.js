'use strict';
/*
document.getElementById('myform').addEventListener('submit', e => {
    e.preventDefault;
    // Получаем значения из формы
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Создаем объект пользователя
    const user = {
        username: username,
        email: email,
        phone: phone
    };

    // Сохраняем данные в локальном хранилище
    localStorage.setItem('userData', JSON.stringify(user));

    // Уведомляем пользователя об успешной регистрации
    alert('Регистрация прошла успешно!');
});

*/

window.onload = () => {
       
      async function handleFormSubmit(event) {
      event.preventDefault()

      const data = serializeForm(event.target)
      toggleLoader()
      const { status } = await sendData(data)
      toggleLoader()
      if (status === 200) {
      onSuccess(event.target)
    } else {
      onError(error.message)
    }
  }

	const closeRegistration = document.querySelector('.close-form').addEventListener('click', (еvent) => {
        
    window.location.href = 'catalog.html';
        
    });

      
    function serializeForm(formNode) {
        const { elements } = formNode
        const data = new FormData()

        Array.from(elements)
        .filter((item) => !!item.name)
        .forEach((element) => {
        const { name, type } = element
        const value = type === 'checkbox'
            ? element.checked
            : element.value

        data.append(name, value)
    })
 
        return data;
    }

    

    function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
    }

    const applicantForm = document.getElementById('myform')
    applicantForm.addEventListener('submit', handleFormSubmit)



    async function sendData(data) {
    return await fetch('/api/apply/', {
    method: 'POST',
    body: data,
  })
  }

  function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
  }




  function onSuccess(formNode) {
    alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
  }

  function onError(error) {
    alert(error.message)
  }

  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.getElementsByClassName('button-form').disabled = !isValid
  }

    applicantForm.addEventListener('input', checkValidity)

}	
	



