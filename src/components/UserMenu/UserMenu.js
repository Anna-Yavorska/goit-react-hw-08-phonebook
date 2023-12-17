import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Button, UserInfo } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handleLogOut = () => dispatch(logOut());
    return (
        <UserInfo>
            <p>{user.email}</p>
            <Button type="button" onClick={handleLogOut} >Logout</Button>
        </UserInfo>
    )
}