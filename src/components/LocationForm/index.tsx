import { useState, ChangeEvent, FormEvent } from 'react'

import styles from './LocationForm.module.css'

interface LocationFormProps {
  onChange: (value: string) => void
}

export default function LocationForm({ onChange }: LocationFormProps) {
  const [address, setAddress] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onChange(address)
    setAddress('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Enter location"
        value={address}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  )
}
