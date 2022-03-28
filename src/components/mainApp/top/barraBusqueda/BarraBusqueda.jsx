import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Yup from 'yup'
import { searchAsync } from '../../../../redux/action/actionAdd'
import { SeachBarStyled } from '../../../../styles/styledComponents/SearchBarStyled'
const BarraBusqueda = () => {
  const {uid} = useSelector(store => store.add)
  console.log('uid en barra busqueda', uid)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      search: ''
    }, 
    validationSchema: Yup.object({
      search: Yup.string().required()
    }),
    onSubmit:({search}) => {
      console.log('busqueda', search)
      dispatch(searchAsync(uid, search))
    }
  })
  return (
    <SeachBarStyled>
      <div className='text'>
      <p>Selecciona Categoria</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <label className='searchBar' htmlFor='searchBar'></label>
        <input type='text' name='search' onChange={formik.handleChange}></input>
        <button type='submit' className='button'><img src='https://res.cloudinary.com/davidcharif/image/upload/v1647251188/sprint3-proyecto/search_rxhhm2.png' alt='magnifyng Glass'/></button> 
       </form>
      </SeachBarStyled>
    
  )
}

export default BarraBusqueda