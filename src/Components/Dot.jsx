function Dot({ handleClick, select, id }) {
  return (
    <button
      onClick={handleClick}
      className={`dot ${id === select && "dot--fill"} `}>
      &nbsp;
    </button>
  );
}

export default Dot;
