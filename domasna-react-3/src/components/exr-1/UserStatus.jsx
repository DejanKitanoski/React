export const UserStatus = ({ isAdmin }) => {
    return(
        <div>
            <h2>Welcome {isAdmin ? "Admin" : "User"}</h2>
        </div>
    )
}

export default UserStatus