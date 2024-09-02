import { totalparam } from "./Tablebody"
import { postparam } from "./Header.jsx"
import { useNavigate } from "react-router-dom"
const url = import.meta.env.VITE_PORT;



function handleclick(){
  const {datePost,qPost,modelPost,compPost} = postparam();
  let post = {
    date : datePost,
    company : compPost,
    q : qPost,
    model : modelPost,
    total : totalparam()
  }
  console.log(post)
  setTimeout(() =>{
  fetch(`${url}`,{
    method : 'POST',
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify(post)
    })
  }, 1000);
  setTimeout(() =>{
    window.location.reload();
  }, 2000);

}

const Footer = () => {
  return(
    <button onClick={handleclick}>SUBMIT</button>
  )
}

export default Footer;