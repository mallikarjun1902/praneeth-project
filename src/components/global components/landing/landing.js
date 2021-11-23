import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Landing extends Component {
    render() {
        return (
            <>
              <div class="container d-flex">
                  <div class="row">
                  <div className="col-4">
                      <div>
                 <h1 style = {{fontSize:"20px" ,textAlign:"center"}}>sarees</h1> 
                 <Link to = '/sarees'>
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/dreaming-of-ocean-271942_900x.jpg?v=1637333747"  style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>
                </Link>
                </div>
                </div>
                <div class="col-4">
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>Blouses</h1> 
                    <Link to = '/blouses'>   
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/chand-sitare-blouse-528053_800x.jpg?v=1637244810" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
             </Link>
                </div>
                <div class="col-4">
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>Mens wear</h1>  
                    <Link to = './menswear'>  
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/walking-angels-trouser-813464_400x.jpg?v=1635228331" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
             </Link>
                </div>
                <div class="col-4">
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>collections</h1> 
                    <Link to = '/collections'>   
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/varaha-blouse-788684_800x.jpg?v=1636458622" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
             </Link>
                </div>
                <div class="col-4">
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>Accessories</h1>    
                    <Link to = '/accessories'>
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/teal-sunrise-scrunchies-771613_800x.jpg?v=1622639776" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
             </Link>
                </div>
                <div class="col-4">
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>Lounge wear</h1>  
                    <Link to = '/loungewear'>  
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/timeless-grace-kaftan-682693_400x.jpg?v=1622602365" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
             </Link>
                </div>
                <div class="col-4">
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>Dresses</h1> 
                    <Link to = '/dresses'>   
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/misty-hills-sunshine-dress-578469_400x.jpg?v=1620312074" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
               </Link>
                </div>
                <div class="col-4">
             
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>Home & living</h1>    
                    <Link to = '/homeliving'>
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/swords-and-lillies-kurta-824813_400x.jpg?v=1635228215" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
             </Link>
                </div>
                <div class="col-4">
                    <h1 style = {{fontSize:"20px",textAlign:"center"}}>Best seller</h1>  
                    <Link to = '/bestseller'>  
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/swords-and-lillies-kurta-824813_400x.jpg?v=1635228215" style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>   
             </Link>
                </div>
                  </div>
                  </div>  
            </>
        );
    }
}

export default Landing;
