import App from "../App";
import Footer from "./footer"


//Create Page

function Create() {
  return (
    <div className="createPage">
      {/* This is called JSX - javascript xml
      Getting navbar and header from app*/}
      
      <App></App>
      <h3>Hello from CreatePage</h3>
    

    <Footer></Footer>
    </div>

  
    
  );
}



export default Create;