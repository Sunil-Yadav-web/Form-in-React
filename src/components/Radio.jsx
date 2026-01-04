

export default function Radio({
  name,
  type,
  value,
  gender,
  onHandleChange,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={value}
        value={value}
        checked={gender === value}
        onChange={onHandleChange}
      />
    </>
  )
}
