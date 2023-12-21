import { InputHTMLAttributes } from "react"


type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = () => {
  return (
    <input type="text"/>
  )
}

export default Input

// Progress:
//  1. cr8 input component
//  2. Add type InputProps with InputHTMLAttributes<HTMLInputElement> from react 