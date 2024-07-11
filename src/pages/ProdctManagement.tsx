import React from 'react'
import AddProdcutModal from '../components/modal/AddProdcutModal'

export default function ProdctManagement() {
  return (
    <div>
      <div style={{display:'flex', justifyContent: 'space-between', padding: '10px 50px', backgroundColor:""}}>
        <p>Product List</p>
        
        <AddProdcutModal />
      </div>
      <div></div>
      <div></div>

    </div>
  )
}
