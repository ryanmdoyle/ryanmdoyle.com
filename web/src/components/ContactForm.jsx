import React from 'react';
import moment from 'moment';
import { css } from '@emotion/core';
import { useForm } from 'react-hook-form';

const formStyles = css`
  display: flex;
  flex-direction: column;

  input, textarea {
    max-width: 500px;
  }

  textarea {
    height: 250px;
  }

  input:focus, textarea:focus {
    outline: none;
    border: 2px solid var(--green); 
  }

  input[type='submit'] {
    width: 200px;
    color: #333;
    background-color: white;
    border: 1px solid #333;
    margin-top: 1rem;
    transition: border 0.2s, color 0.2s, background-color 0.2s;
    :hover {
      background-color: var(--green);
      border: 1px solid var(--green);
      color: white;
    }
  }

  label {
    margin-top: 1rem;
  }

  span {
    color: var(--pink);
  }
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", data })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={formStyles} data-netlify="true" name='contact' netlify-honeypot="bot-field">

      {/* Required for Netlofy Forms */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor='name'>Name</label>
      <input name="name" ref={register({ required: true })} />
      {errors.name && <span>You must include your name</span>}

      <label htmlFor='email'>Email Address</label>
      <input name="email" ref={register({
        required: true,
        pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      })} />
      {errors.email && <span>You must include a valid email address</span>}

      <label htmlFor='message'>Message</label>
      <textarea name="message" ref={register({ required: true })} />
      {errors.body && <span>You must include a message</span>}

      <input type="submit" />
    </form>
  );
};

export default ContactForm;