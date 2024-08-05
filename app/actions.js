"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Error - name must be at least 2 characters long." })
    .max(40, { message: "Error - name must be at most 40 characters long." }),
  email: z
    .string()
    .email({ message: "Error - email must be a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Error - subject must be at least 5 characters long." })
    .max(100, {
      message: "Error - subject must be at most 100 characters long.",
    }),
  message: z
    .string()
    .min(5, { message: "Error - message must be at least 5 characters long." })
    .max(500, {
      message: "Error - message must be at most 500 characters long.",
    }),
});

// Function to send data to AWS API
async function sendContactData(data) {
  const response = await fetch('https://93y1jugqjk.execute-api.us-east-1.amazonaws.com/contact-form', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Something went wrong!');
  }

  return result;
}

export default async function submitForm(prevSate, formData) {
  const result = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  } else {


    const { name, email, subject, message } = result.data;

    // Log the validated data
    console.log(result.data);

    // Do something with the data
    // Add your form submission logic here
    // For example, sending an email or storing the data in a database
    // Note: This example only logs the data to the console
    try {
      // Replace the following with actual submission logic
      // await sendEmail(result.data);
      // await saveToDatabase(result.data);
      await sendContactData({
        name:result.data.name,
        email: result.data.email,
        subject: result.data.subject,
        message: result.data.message
      });
      return {
        success: true,
        message: `Thank you, ${result.data.name}, your message was sent successfully. We will reply to you within 72 hours.`,
      };
    } catch (error) {
      console.error("Form submission error:", error);
      return {
        errors: {
          success: false,
          form: "An error occurred while submitting the form. Please try again later.",
        },
        message: `Sorry, ${result.data.name}, something went wrong. Please try again later.`,
      };
    }
  }
}
