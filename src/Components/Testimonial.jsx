import { useState } from "react";
import Arrow from "./Arrow.jsx";
import testimonials from "../data.js";
import Dot from "./Dot.jsx";

function Testimonial() {
  const [select, setSelect] = useState(1);

  function handleNext() {
    if (select === testimonials.length) setSelect(0);
    else setSelect((s) => s + 1);
  }

  function handlePrev() {
    if (select === 0) setSelect(testimonials.length);
    else setSelect((s) => s - 1);
  }

  function handleClick(arg) {
    setSelect(arg);
  }
  return (
    <div className="carousel">
      <img
        src={testimonials[select - 1].img}
        alt={`${testimonials[select - 1].author} picture`}
      />
      <blockquote className="testimonial">
        <p className="testimonial-text">{testimonials[select - 1].text}</p>
        <p className="testimonial-author">{testimonials[select - 1].author}</p>
        <p className="testimonial-job">{testimonials[select - 1].job}</p>
      </blockquote>
      <button className="btn btn--left">
        <Arrow direction={"left"} handleClick={handlePrev} />
      </button>
      <button className="btn btn--right">
        <Arrow direction={"right"} handleClick={handleNext} />
      </button>
      <div className="dots">
        {testimonials.map((el) => (
          <Dot
            handleClick={() => handleClick(el.id)}
            key={el.id}
            id={el.id}
            select={select}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
