import Link from "next/link";
import MyLayout from "./components/layout";

export default function About(){
	return (
		<>
		 <MyLayout/>
		<h1>About page</h1>
		<Link href="/"> Home</Link>
		<h6 className="text-3xl font-bold underline">Atif</h6>
		
		</>
	

		)
}