import { FormEvent, useRef } from "react";

const ContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      email: emailRef.current!.value,
      contactOn: new Date(contactRef.current!.value).toDateString(),
    });
  };

  //   NOTE : For the onChange() event we will annotate the event as ChangeEvent<HTMLElementOnWhichTheChangeEventIsApplied)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter Your email"
          ref={emailRef}
        />
        <input
          type="date"
          name="date"
          placeholder="When Can we reach out to u?"
          ref={contactRef}
        />
        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
};

export default ContactForm;
