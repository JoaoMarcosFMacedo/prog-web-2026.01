import "./globals.css";
import { Profile } from '../Components/Profile'
Parse.initialize('YOUR_APPLICATION_ID', 'YOUR_JAVASCRIPT_KEY');
Parse.serverURL = 'https://parseapi.back4app.com/';



export default function Home(){
    return(
        <>
            <Profile />
            <Profile />
            <Profile />
            <h1>Divisão</h1>
            <ProfilePage />
        
        </>
    
    )

}
function ProfilePage(){
    return(
        <>
        <div ClassName="foto">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Ract"
            />
        </div>
        </>

    )
}

