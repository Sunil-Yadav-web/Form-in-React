import React from 'react'

export default function SubjectRadio({
  name,
  type,
  id,
  checked,
  onHandleChange,
}) {
  return (
    <input
      name={name}
      type={type}
      id={id}
      checked={checked === true}
      onChange={onHandleChange}
    />
  )
}
