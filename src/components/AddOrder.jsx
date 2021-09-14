import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddOrderAction } from '../store/actions/AddOrderActions'
import { setLS } from '../utils/LocalStorage'
import { Input } from './Input'

export const AddOrder = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        id: '',
        client: '',
        pickAdress: '',
        dropAdress: '',
        courier: ''
    })

    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handlerLoginForm = (e) => {
        e.preventDefault()
        dispatch(AddOrderAction(form))
        // setLS('orders', )
    }
    return (
        <form  className='packages__add'>
            <Input 
                className='packages__add-input packages__add-input__id'
                placeholder='ID'
                name='id'
                onChange={handleForm}
            />
            <Input 
                className='packages__add-input packages__add-input__client'
                placeholder='Client'
                name='client'
                onChange={handleForm}
                />
            <Input 
                className='packages__add-input packages__add-input__pickup'
                placeholder='Adress'
                name='pickAdress'
                onChange={handleForm}
                />
            <Input 
                className='packages__add-input packages__add-input__dropoff'
                placeholder='Adress'
                name='dropAdress'
                onChange={handleForm}
                />
            <Input 
                className='packages__add-input packages__add-input__courier'
                placeholder='Courier'
                name='courier'
                onChange={handleForm}
                />
            <button onClick={e => handlerLoginForm(e)} className='packages__add-button'>Add</button>
        </form>
    )
}
