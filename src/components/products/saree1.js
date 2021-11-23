import React, { Component } from "react";



class Saree1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:1
        };
        }
        decrementValue() {
            if(this.state.value===1){
                this.setState({value:1})
            }
            else{
                this.setState({value:this.state.value-1})
            }
            
        
        };
        incrementValue(){
            this.setState({value:this.state.value+1})
        }
    
  render() {
      
    return (
      <>
        <div class="container d-flex">
          <div class="row">
            <div class="col-7 mb-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/dreaming-of-ocean-271942_800x.jpg?v=1637333747"
                style={{ height: "60vh", width: "40vw", padding: "10px" }}
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/dreaming-of-ocean-915441_800x.jpg?v=1637333747"
                style={{ height: "60vh", width: "40vw", padding: "10px" }}
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/dreaming-of-ocean-105315_800x.jpg?v=1637333747"
                style={{ height: "60vh", width: "40vw", padding: "10px" }}
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/dreaming-of-ocean-998720_800x.jpg?v=1637333747"
                style={{ height: "60vh", width: "40vw", padding: "10px" }}
              />
            </div>
            <div class="col-5">
              <h1 style={{ fontSize: "25px", paddingTop: "10px" }}>
                Dreaming of ocean(saree)
              </h1>
              <div>
                <span class="fa fa-star checked" style = {{color:"orange"}}></span>
                <span class="fa fa-star checked" style = {{color:"orange"}}></span>
                <span class="fa fa-star checked" style = {{color:"orange"}}></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <p>SKU: SUTAWS882</p>
              <h1 style={{ fontSize: "15px" }}>MRP: RS. 2,800.00</h1>
              <p>Price inclusive of taxes</p>
              <p>Or 3 interest-free payments of ₹933 with  </p>
              <div class="container d-flex" style = {{borderRadius:"2px",borderWidth:"2px"}}>
               <button onClick = {()=>this.decrementValue()}>-</button>
               <button >{this.state.value}</button>
               <button onClick = {()=>this.incrementValue()}>+</button>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Saree1;
