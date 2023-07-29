function RadioButton({ status, setStatus, value, title, children }) {
  return (
    <div className={value}>
      <label htmlFor={value}>
        {children} {title}
      </label>
      <input
        type="radio"
        id={value}
        value={value}
        checked={status === value}
        onChange={(e) => setStatus(e.target.value)}
      />
    </div>
  );
}

export default RadioButton;

// ***************
/* <div className="todo">
  <label htmlFor="todo">
    <BsAlignStart /> todo
  </label>
  <input
    type="radio"
    id="todo"
    value="todo"
    checked={status === "todo"}
    onChange={(e) => setStatus(e.target.value)}
  />
</div>; */
