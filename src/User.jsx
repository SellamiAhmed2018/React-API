import React from "react";


const User = ({data}) => {
	return(
		<tbody>
		{data.hits.map((user,key) => {
			return(
				<tr key={key}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.username}</td>
					<td>{user.email}</td>
					<td>{user.address.city}</td>
					<td>{user.phone}</td>
					<td>{user.website}</td>
					<td>{user.company.name}</td>
				</tr>
			)
		})}
		</tbody>
	)
}

export default User;