import { Profile, Profile2 } from "../components/Profiles";
import { Avatar } from "../components/Avatar";
// import { Profile2} from "../components/profiles";

export default function Home(){
  return(
    <>
      <selection>
        <article>
          <h1> Meu primeiro componente </h1>
          <ol>
            <li> Linha um </li>
            <li> Linha dois </li>
        <h1> A logo da Barbie, do Ben 10 e o Ednaldo pereira. </h1>
          <Profile2/>
          <Profile/>
          <Avatar/>
          <Avatar/>
          <Avatar/>
          <br/>
          Exemplo da expressão '{ 5 * 2 }' 
          </ol>
        </article>
        Nome { 50/2 } 
      </selection>
    </>
  )
}

