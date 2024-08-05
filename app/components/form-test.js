"use client"

import submitForm from "../actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./ui/submit-button";

// const initialState = {
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// };

export function FormTest() {
  // const [state, formAction] = useActionState(submitForm, initialState);
  const [formState, formAction] = useFormState(submitForm, "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await formAction(formData);

  };


  // useEffect hook monitors the formState for changes. If the form submission is successful, it resets the form fields and sets the success message. The message is cleared after 10 seconds using a timer.

  return (
    <form onSubmit={handleSubmit}>
      <p>Hello, the Future of Work Council</p>

      <p>
        My name is:
        <small>Name must be between 2 and 40 characters long.</small>
        <input
          placeholder="John Doe"
          type="text"
          id="name"
          name="name"
          required
        />
        {formState.errors?.name && <span>{formState.errors.name}</span>}
      </p>
      <SubmitButton />
    </form>
  );
}
