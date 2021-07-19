
export default function PizaDetail(){
  let PizzaPrice=12;
    return(
        <div className="container">
        <div className="row mt-5">
        <div className ="col col-md-4 offset-1">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
         </div>
            <div className="col col-md-4 offset-1">
                <h1>Pizza Tikka</h1>
                <h6>{PizzaPrice}$</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
               <h5>Select Your Toppings</h5>
                <div className="row">
                    <div className="col col-md-4">
                        <img   style={{height:"100px", width:"100px" }} src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                        <p className="text-center">12</p>
                    </div>
                    <div className="col col-md-4">
                    <img   style={{height:"100px", width:"100px" }} src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <p className="text-center">5</p>
                    </div>
                    <div className="col col-md-4">
                    <img   style={{height:"100px", width:"100px" }} src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <p className="text-center">8</p>
                    </div>
                </div>
            </div> 
        </div>
        
        </div>
        
      
    )
}