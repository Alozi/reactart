// import styled  from "styled-components";

// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

// export default Button;

export default function Button({ children, ...props }) {
  return (
    <button
      className="py-4 px-8 font-semibold uppercase rounded-md text-gray-800 bg-[#f0b322] hover:bg-[#f0920e]"
      {...props}
    >
      {children}
    </button>
  );
}
