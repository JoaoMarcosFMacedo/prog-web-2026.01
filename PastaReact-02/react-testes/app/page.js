import { Profile, Profile2} from "../components/Profiles";
import { Avatar } from "../components/Avatar";
import { Home } from "../components/Home";

export default function PAGE1(){
  return(
    <>
      <selection>
        <article>
          <div className="cabecalho">
            <Home/>
          </div>          
          <h1> A logo da Barbie, do Cartoon Network e o Ednaldo pereira. </h1>
          <Profile2/>
          <br/>
          <Profile/>
          <br/>
          <Avatar/>
          <br/>
          Exemplo da expressão '{ 5 * 2 }' 
          <h1>Sally Ride's Packing List</h1>
          
          <Item 
              isPacked={true} 
            name="Space suit" 
          />
          <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
         />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </article>
        Nome { 50/2 } 
      </selection>
    </>
  )
}
function Item({name,isPacked }){
  return<li className="item"> {isPacked ? name + ' - Verdade ': name} </li>
}
  


