import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    Label: string;
}


const Button = () => {
    
  return (
    <button></button>
  );
}

// Progress:
// 1. cr8 Button component
// 2. Add interface Props with Label props with type string
// 3. add extends ButtonHTMLAttributes<HTMLButtonElement> to Props type