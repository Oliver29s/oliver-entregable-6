import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/purchasesPage/PurchaseCard'
import confi from '../layout/confi'

const PurchasesPage = () => {
    const [purchases, setpurchases] = useState()
    useEffect(() => {
        const url ='https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
      axios
      .get(url,confi)
      .then( res => setpurchases(res.data))
      .catch(err => console.log(err))
    
     
    }, [])
    
  return (
    <div>
        {
            purchases?.map( purchase => (
                <PurchaseCard key={purchase.id} purchase={purchase}/>
            ))
        }
    </div>
  )
}

export default PurchasesPage