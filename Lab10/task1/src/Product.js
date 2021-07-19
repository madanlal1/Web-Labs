
import {useState, useEffect} from 'react'
import {Button, Card, Image, Icon} from 'semantic-ui-react'

export let cartItems=[];
export function Product(){

    const[products, updateProducts]=useState([])


    useEffect(() => {
            fetch('Mock.json').then((response)=>response.json()).then((data)=>{
                updateProducts(data)
            })
    }, [])

    function handleAddToCart(item){

        cartItems.push(item);

    }
    return(
        <div style={{marginLeft:"50px", marginRight:"20px"}}>
            <div class="ui four column grid">
                   <div class="row">
             {products.map(itm=>{
                 
               return <div key={'_'+itm.id} class="column" style={{marginTop:"30px"}}>
               <Card color="red">
                  <Card.Content>

                    <Card.Header>{itm.name}</Card.Header>
                    <hr />
                    <Card.Description>
                      Price: <strong>{itm.price}</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>

                      <Button basic color='green' onClick={()=>{handleAddToCart(itm)}}>
                              <Icon name='cart' size='large' />
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
            </div>
            
            })}
         </div>
    </div>
 
        </div>
    ) 
}