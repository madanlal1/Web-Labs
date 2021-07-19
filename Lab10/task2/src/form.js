
export default function form(){

return(
    <div className="container">
        <div className="row">
            <div className="col col-md-5 offset-6">
             <form className="form">
                <label for ="filling">Select your filling</label>
                <select id="filling" className="form-control mt-1 form-select" aria-label="Default select example"> 
                    <option>Chiken</option>
                    <option>Veg</option>
                    <option>Chinese</option>
                </select>
                <label for ="crust" className="mt-3">Select your Pizza crust</label>
                <select id="crust" className="form-control mt-1 form-select" aria-label="Default select example"> 
                    <option>Sicilian Style</option>
                    <option>Flatbread</option>
                    <option>Neapolitan Crust</option>
                </select>
                <label className="mt-5">Do you like adding Cheese ?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="yesCheese" />
                <label class="form-check-label" for="yesCheese">
                yesCheese
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="noCheese" checked />
                <label class="form-check-label" for="noCheese">
                   noCheese
                </label>
                </div>

                <label className="mt-5">Select Pizza Size ?</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="small" />
                <label class="form-check-label" for="small">
               Small
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="medium" checked />
                <label class="form-check-label" for="medium">
                  Medium
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="large" checked />
                <label class="form-check-label" for="large">
                  Large
                </label>
                </div>

                <label className="mt-5">Any additional Notes ?</label>
                <textarea className="form-control"></textarea>

                <label className="mt-5" > Name</label>
                <input type="text" className="form-control" value=''/>

                <label className="mt-5" >Phone Number</label>
                <input type="text" className="form-control" value=''/>
            
                <label className="mt-5" >Email Address</label>
                <input type="text" className="form-control" value=''/>

                <label className="mt-5" > Pick up Date</label>
                <input type="date" className="form-control" value=''/>

                <label className="mt-5" > Pick up Time</label>
                <input type="time" className="form-control" value=''/>

                <label className="mt-5 form-control  bg-light " >Total
                : 32$</label>
                

                <label className="mt-5  bg-light mb-5 p-3 d-inline"> 1 </label>
                <button className="btn btn-primary mx-3 mb-5 mt-5">Add to Cart </button>

             </form>
             </div>
        </div>
     </div>   
    
)
}