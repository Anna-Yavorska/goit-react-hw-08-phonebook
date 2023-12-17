import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";

export const AppBar = () => {
    const { isLoggeIn } = useAuth();

    return (
        <header>
            <Navigation />
            {isLoggeIn ? <UserMenu />:<AuthNav />}
        </header>
    )
}