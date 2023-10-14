import Head from 'next/head'
import Link from 'next/link'
import Home from '../components/Home';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';


function App() {
  	return (
	<div>
      	<Head>
        	<title>Math Generator</title>
    		<meta name="description" content="Generated by create next app" />
        	<meta name="viewport" content="width=device-width, initial-scale=1" />
      	</Head>
      	<h1>Math Generator</h1>
      	<div>
		  <Link href="/">Home</Link>
		  <Link href="./login">Login</Link>
		  <Link href="./create-account">Create Account</Link>
    	</div>
    </div>
  	);
}

export default App;
