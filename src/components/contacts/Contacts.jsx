import React, { useRef,useState } from 'react'
import './contacts.css'
import emailjs from '@emailjs/browser';

const Result =()=>{
  return(
    <p>Thank you,your message has been successfully sent. I will contact you soon</p>
  );
};

const Contacts = (props) => {
  const [result,showresult]= useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oaa4evv', 'template_lk43ymj', form.current, 'uidirlbNXmodNqSUR')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showresult(true)
  };

  // hide result
  setTimeout(()=>{
    showresult(false);
  },4000)
    return(
        <>
         <section id='contacts' className='contact'>
          <div className='container d-flex justify-content-center'>
    <form className='formulario mx-5 pt-3 pb-3' ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
      <h1> Contact Me</h1>
      <h4> I will be glad to answer your message!</h4>
      <label className="form-label text-light"> Name</label>
      <input type="text"  className="form-control" id="name" name="user_name" required  />
      </div>
      <div className="mb-3">
      <label className="form-label text-light">Email</label>
      <input type="email"  className="form-control" id="mail" name="user_email" required />
      </div>
      <div className="mb-3">
      <label className="form-label text-light">Message</label>
      <textarea className="form-control" aria-label="With textarea" id="message" name="message" required> </textarea>
      </div>
      <input className='btn-contact' type="submit" value="SEND" />
      <div className='row'>
            { result ? <Result/>: null}
      </div>
    </form>
    </div>
    </section>
    </>
    )
    
}

export default Contacts

 