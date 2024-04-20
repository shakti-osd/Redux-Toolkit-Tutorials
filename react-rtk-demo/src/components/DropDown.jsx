import { useEffect, useState } from 'react'

const countries = [
        {
            name: 'India',
            value: 'IN',
            cities:['Delhi','Mumbai']
        },
        {
            name: 'Pak',
            value: 'PK',
            cities:['Lahore','Karachi']
        },
        {
            name: 'Bangladesh',
            value: 'BG',
            cities:['Dhaka','Chittagong']
        }
    ]

const DropDown = () => {

    
    
    const [country, setCountry] = useState(0);
   

  return (
      <>
          <select value={country} onChange={(e) => {
              console.log(e.target.value)
              setCountry(e.target.value)
          }
          }>
              {
                  countries.map((item,index) => {
                  return <option value={index} key={item.value}>{ item.name}</option>
                  })
              }
          </select>
          
          <select>
              {
                  countries[country].cities.map((item,index) => {
                  return <option key={item} value={index}>{item}</option>
                  })
              }
        </select>
      </>
  )
}

export default DropDown