import React from 'react'
import { Aside } from '../../Componets/Aside/Aside'
import { Header } from '../../Componets/Header/Header'
import'./addtemplates.scss'
import {Transition} from '../../Componets/Animation/Animation'
import { Addtemplatefun } from '../../Componets/Addtemplatesfunc/Addtemplatefun'
import { Colorpicker } from '../../Componets/Colorpicker/Colorpicker'
export const Addtemplates = () => {
  return (
    <div className='Add-main-div'>
      <Header/>
      <Aside/>
      <Transition>
     
      <div className='addtemplate-letter'>
        <h1 className='additem'>Add templates</h1>
      </div>
      <div className='Add-templ-func'>
        <Addtemplatefun/>
        
      </div>
      
      
      </Transition>
    </div>
  )
}
