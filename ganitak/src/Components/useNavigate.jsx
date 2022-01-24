//useNavigate
//Type declaration

//declare function useNavigate(): NavigateFunction;

//interface NavigateFunction {
//  (
//    to: To,
//    options?: { replace?: boolean; state?: any }
//  ): void;
//  (delta: number): void;
//}

//The useNavigate hook returns a function that lets you navigate programmatically, for example after a form is submitted.

import { useNavigate } from "react-router-dom";

function SignupForm() {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await submitForm(event.target);
    navigate("../success", { replace: true });
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
