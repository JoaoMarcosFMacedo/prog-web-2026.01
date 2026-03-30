
import { Avatar } from "../components/Avatar";
import { Home } from "../components/Home";
import { Amigos } from "../utilss/Lista";
export default function PAGE1(){
  return(
    <>
      <selection>
        <article>
          {/* <div className="cabecalho"> */}
            <Home/>
            <Avatar/>
          {/* </div> */}
         
          <br/>
         <Amigos/>
          <br/>
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
  