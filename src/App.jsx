function App() {
  return (
    <div className="carousel">
      <img
        src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg"
        alt="avatar-img"
      />
      <blockquote className="testimonial">
        <p className="testimonial-text">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          officiis totam possimus in eos? Veritatis distinctio deleniti magnam
          eos vero omnis pariatur atque, fugiat similique debitis cupiditate
          delectus molestias eligendi!"
        </p>
        <p className="testimonial-author">Maria de Almeida</p>
        <p className="testimonial-job">
          Senior Product Manager at EDP Comercial
        </p>
      </blockquote>
      <button className="btn btn--left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="btn-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="btn btn--right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="btn-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="dots">
        <button className="dot dot--fill">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
      </div>
    </div>
  );
}

export default App;
