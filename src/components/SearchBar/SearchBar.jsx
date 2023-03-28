import { useState } from 'react'
import styles from '../../styles/SearchBar/SearchBar.module.scss'
var data = require('../../MOCK_DATA.json')

export default function SearchBar() {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    console.log('search', searchTerm)
  }
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbox}>
        <div className={styles.searchinner}>
          <input
            className={styles.inputtext}
            type="text"
            value={value}
            onChange={onChange}
          />
          <button onclick={() => onSearch(value)}>Search</button>
        </div>
        <div className={styles.dropdown}>
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase()
              const fullName = item.full_name.toLowerCase()

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              )
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className={styles.dropdownrow}
                key={item.full_name}
              >
                {' '}
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
