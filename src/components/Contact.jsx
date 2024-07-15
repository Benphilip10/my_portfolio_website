import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import Popup from "./Popup";


const Contact = () => {

  const schema = z.object({
      name:z.string().min(3, "Name must be at least 3 characters").max(30),
      email:z.string().email("Invalid email address"),
      message: z.string().min(30, "Message must be at least 30 characters").max(250)  
  })


  const {register, handleSubmit, formState:{errors}} = useForm({resolver: zodResolver(schema)});

  const formRef = useRef()

  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const [popup, setPopup] = useState(false);

  const closePopup = () => {
    console.log("Closing popup");
    window.scrollTo(0,0);
    setPopup(false);
    // window.location.reload();
  }; 

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
  };
  
  const onSubmit = (data) => {
    
      setLoading(true);

      emailjs.send(
      'service_uez09bd',
      'template_8woj9xr',
      {
        from_name: data.name,
        to_name: "Benjamin",
        from_email:data.email,
        to_email:"benjaminphillip06@gmail.com",
        message: data.message
      },
      '1rU-s4GWsDqRB7Yo_'
      )

      .then(()=> {
          setLoading(false);
          setPopup(true);

          setForm({
            name:'',
            email:'',
            message:''
          })

      })
  };

  const isMobile = window.innerWidth <= 768;

  return (
    
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
      variants={isMobile ? {} : slideIn("left","tween", 0.2, 1)}
      className="flex-[0.75] p-8 rounded-2xl bg-black-100"
      > 
        <p className={styles.sectionSubText}>Let's work together</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

       
        {/* Form components */}

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}
        className="mt-12 flex flex-col gap-8"
        >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-3">Your Name</span>
          <input {...register("name")}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
          {errors.name && <span className="text-red-700">{errors.name.message}</span>}
        </label>
              
        <label className="flex flex-col">
          <span className="text-white font-medium mb-3">Your Email Address</span>
          <input {...register("email")}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your Email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
          {errors.name && <span className="text-red-700">{errors.email.message}</span>}
        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-3">Your Message</span>
          <textarea {...register("message")}
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
          {errors.name && <span className="text-red-700">{errors.message.message}</span>}
        </label>

        <button type="submit"
        className="bg-white py-3 px-8 outline-none w-full xl:w-fit shadow-md rounded-xl font-bold shadow-primary text-primary"
        >
        {loading ? 'Sending...': 'Send'}
        </button>
      </form>
      </motion.div>

      <motion.div
        variants={isMobile? {} : slideIn("right","tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
            <EarthCanvas/>
      </motion.div>

      <div className="relative z-30">
            {popup && <Popup onClose={closePopup}/>}
      </div>

    </div>
  )
}

export default SectionWrapper (Contact, "contact")