export default function Input({
  label,
  name,
  type,
  firstName,
  onHandleChange,
  placeholder,
  required,
}) {
  return (
    <>
      <label htmlFor={name}>{label}*</label>
      <input
        type={type}
        name={name}
        id={name}
        value={firstName}
        onChange={onHandleChange}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}
