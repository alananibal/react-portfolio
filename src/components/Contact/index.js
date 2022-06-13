import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      {/* !--Section: Contact v.2--> */}
      <section id="contact-form" onSubmit={handleSubmit} class="mb-4">
        {/* <!--Section heading--> */}
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        {/* <!--Section description--> */}
        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact me
          directly. I will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          {/* <!--Grid column--> */}
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              {/* <!--Grid row--> */}
              <div class="row">
                {/* 
                    <!--Grid column--> */}
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      defaultValue={name}
                      onBlur={handleChange}
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>
                {/* <!--Grid column-->

                    <!--Grid column--> */}
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      defaultValue={email}
                      onBlur={handleChange}
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row-->
                                
                <!--Grid row--> */}
              <div class="row">
                {/* <!--Grid column--> */}
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                      defaultValue={message}
                      onBlur={handleChange}
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              {/* <!--Grid row--> */}
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </form>

            <div class="text-center text-md-left">
              <button
                class="btn btn-primary"
                data-testid="button"
                type="submit"
              >
                Send
              </button>
            </div>
            <div class="status"></div>
          </div>
          {/* <!--Grid column-->

        <!--Grid column--> */}
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Santa Cruz, CA 95064, USA</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 111 111 1111</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>alananibalsr@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}
        </div>
      </section>

      
    </section>
  );
}

export default ContactForm;
