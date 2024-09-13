import { totalparam } from "./Tablebody";
import { postparam } from "./Header.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const url = import.meta.env.VITE_PORT;

const Footer = () => {
  const [done, setDone] = useState(false);

  const handleclick = async () => {
    const { datePost, qPost, modelPost, compPost } = postparam();
    let post = {
      date: datePost,
      company: compPost,
      q: qPost,
      model: modelPost,
      total: totalparam()
    };
    console.log(post);

    setTimeout(async () => {
      try {
        const response = await fetch(`${url}`, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post)
        });

        if (response.ok) {
          setDone(true);
        } else {
          console.error('Failed to post data');
        }
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }, 1000);
  };

  return (
    <>
      {done === false ? (
        <button onClick={handleclick}>SUBMIT</button>
      ) : (
        <h2 style={{ color: "green" }}>Success</h2>
      )}
    </>
  );
};

export default Footer;
