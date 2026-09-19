const items = ['a', 'b', 'c']

export function List() {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}
