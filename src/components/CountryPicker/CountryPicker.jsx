import React , {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'


import styles from './CountryPicker.module.css'

function CountryPicker({handleCountryChange}) {

  const [countries, setCountries] = useState([])



  useEffect(() => {
    const countriesFetch = async () => {
      setCountries(await fetchCountries())
    }
    countriesFetch()
  },[setCountries])

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((c,i) => <option key={i} value={c}>{c}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default CountryPicker
