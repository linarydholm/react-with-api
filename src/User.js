const User = ({name, email, address: {city}}) => {

    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    )
}
 
export default User;