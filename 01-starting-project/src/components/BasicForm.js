import { useState } from "react";

const BasicForm = (props) => {


  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [firstnameError, setFirstnameError] = useState();
  const [lastnameError, setLastnameError] = useState();
  const [emailError, setEmailError] = useState();

  const [blur, setBlur] = useState({
    firstName: false,
    lastName: false,
    email: false,
  })

  const inputChangeHandler = (event) => {
    
    let inputName = event.target.id;
    let value = event.target.value;

    setFirstnameError(null)
    setLastnameError(null)
    setEmailError(null)
    setBlur({
      ...blur,
      [inputName]: false,
    })
    
    setForm(prev => {
      return {
        ...prev,
        [inputName]: value
      }
    })
    
  }
  const inputBlurHandler = (event) => {
    let inputName = event.target.id;


    setBlur({
      ...blur,
      [inputName]: form[inputName] === '' ? true : false
    })

  }
  const submitHandler = (e) => {
    e.preventDefault();

    if(form.firstName === '') {
      setFirstnameError('Name Should not be empty')
    }
    if(form.lastName === '') {
      setLastnameError('Last Name Should not be empty')
    }
    if(form.email === ''){
      setEmailError('Email should not be empty')
    }
    if(form.email !== '' && !form.email.includes('@')) {
      setEmailError('Email body should have @ symbol');
    }

  } 

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
              onBlur={inputBlurHandler} 
              onChange={inputChangeHandler} 
              className={blur.firstName ? 'blur': ''}
              type='text' 
              id='firstName' />
              {firstnameError && <p className="error-text">{firstnameError}</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input 
              onBlur={inputBlurHandler} 
              onChange={inputChangeHandler} 
              className={blur.lastName ? 'blur': ''}
              type='text' 
              id='lastName' />
              {lastnameError && <p className="error-text">{lastnameError}</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
            onBlur={inputBlurHandler} 
            onChange={inputChangeHandler} 
            className={blur.email ? 'blur': ''}
            type='text' 
            id='email' />
            {emailError && <p className="error-text">{emailError}</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
