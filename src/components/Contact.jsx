// import axios from "axios";
// import React, { useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { toast } from "react-toastify";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/send/mail";


// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [contact, setContact] = useState("");
//   const [loading, setLoading] = useState(false);
  
//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setContact(value);
//     }
//   };

//   const sendMail = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.post(
//        API_URL,
//         {
//           name,
//           email,
//           message,
//           contact,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       setName("");
//       setEmail("");
//       setMessage("");
//       setContact("");
//       toast.success(data.message);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section className="contact" id="contact">
//       <form onSubmit={sendMail}>
//         <h1>CONTACT US</h1>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder=""
//           />
//         </div>
//         <div>
//           <label>Contact</label>
//           <input
//            type="tel"
//            id="contact"
//            name="contact"
//            value={contact}
//            onChange={handlePhoneChange}
//            maxLength="10"
//           />
//         </div>
//         <div>
//           <label>Message</label>
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "15px",
//           }}
//         >
//           {loading && <ClipLoader size={20} color="white" />}
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const API_URL="https://backend-gpbw.onrender.com/send/mail"||  "http://localhost:4000/send/mail"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input
    if (/^\d*$/.test(value)) {
      setContact(value);
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        API_URL,
        {
          name,
          email,
          message,
          contact,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
      setContact("");
      toast.success(data.message); // Display success message
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred"); // Handle error
    } finally {
      setLoading(false); // Ensure loading is reset
    }
  };

  return (
    <section className="contact" id="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Make it required for better UX
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Make it required for better UX
          />
        </div>
        <div>
          <label>Contact</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={contact}
            onChange={handlePhoneChange}
            maxLength="10"
            required // Make it required for better UX
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required // Make it required for better UX
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
