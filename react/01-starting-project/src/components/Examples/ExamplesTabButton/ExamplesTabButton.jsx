import "./ExamplesTabbutton.css";

export default function ExamplesTabButton({ children, isSelected, ...props }) {
  // console.log("ExamplesTabButton Component Executing")
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}