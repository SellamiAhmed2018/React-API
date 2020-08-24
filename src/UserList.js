import React,{useState,useEffect} from "react";
import "./App.css";
import axios from "axios";
import User from "./User.jsx";


const App = () => {
	const [listOfUser, setListOfUser] = useState({hits : []});

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get("https://jsonplaceholder.typicode.com/users");
			setListOfUser({hits : result.data});
		}
		fetchData();
		}, []);
	console.log(listOfUser);
	/**/
	return(
		<div>
			{listOfUser.hits.length>=1&&
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>name</th>
							<th>username</th>
							<th>email</th>
							<th>city</th>
							<th>phone</th>
							<th>website</th>
							<th>company</th>
						</tr>
					</thead>
					<User data={listOfUser}/>
				</table>
			}
		</div>
	)
}


export default App;