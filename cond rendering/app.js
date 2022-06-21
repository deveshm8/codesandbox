import "./styles.css";
import React from "react";
export default function App() {

function Login(){
  const checkLogin=true;
if(checkLogin===true)
return <h2>Welcome you just Logged In</h2>
else
{
return (<div>  

<form>
  <h1 id='x'>Login here</h1>
<input type="text" placeholder="Username" required/>
<input type="password" placeholder="Password" required/>
<input type="submit" value="SUBMIT"/>
</form>

</div>);
}
}
return (<div>
  {Login()}
  </div>);
  }
