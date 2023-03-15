import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder='name' {...register('name', { required: true, minLength: 5, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
        <error>{errors.name?.type === 'required' && 'Name is required'}</error>
      </div>
      <div>
        <input type="date" id='dob' {...register('DateofBirth', { required: true, min: "1900-01-01", max: "2022-12-31" })} />
        {errors.dob && <span>This field is required and should be within the range 1900 to 2022</span>}
      </div>
      <div>
        <input type="email" placeholder='email' {...register('Email', { required: true, pattern: /^\S+@\S+$/ })} /><br></br>
        <error>{errors.Email?.type === 'required' && 'Email is required'}</error>
        <error>{errors.Email?.type === 'pattern' && 'Entered email is in wrong format'}</error>
      </div>
      <div><input {...register("phone", { required: true, minLength: 10, maxLength: 10,min:{value:2, message:"phone number is incorrect"} })} placeholder="Phone" />
      <br></br>
      <error>{errors.phone?.type === 'required' && 'Phone Number is required'}</error>
      <error>{errors.phone?.type === 'minLength' && 'Entered number is less than 10 digits'}</error>
      <error>{errors.phone?.type === 'maxLength' && 'Entered number is greater than 10 digits'}</error></div>
      
      <div><input {...register("Address", { required: true })} placeholder="Address" /></div>
      <label>Gender:</label>
      <select placeholder='Gender'{...register('Gender', { required: true })}>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <div><span>Hobbies:</span></div>
      <div>
        <input type="checkbox" value="reading" {...register('checkbox')} /><label>reading</label>
      </div>
      <div>
        <input type="checkbox" value="dancing" {...register('checkbox')} /><label>dancing</label>
      </div>
      <div>
        <input type="checkbox" value="singing" {...register('checkbox')} /><label>singing</label>
      </div>
      <label>Major:</label>
      <select {...register('Major',{required:true})}>
        <option value="Engineering">Engineering</option>
        <option value="Psychology">Psychology</option>
        <option value="Bussiness and Management">Bussiness and Management</option>
        <option value="Nursing">Nursing</option>
        <option value="Communications">Communications</option>
      </select>
      <div><input type="submit"  value="submit"/></div>
    </form>

  )
}

export default App
