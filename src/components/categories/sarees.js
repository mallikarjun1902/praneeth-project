import React, { Component } from 'react';

class Sarees extends Component {
  renderPage = ()=>{
    window.location.href = "/products/1"
}

    render() {
        return (
            <div>
                 <h1 style = {{textAlign: 'center',padding:'10px'}}>All sarees</h1>
        <div className="container d-flex flex-column p-3">
            <div className="row justify-content-between">
                <div className="col-4"  >
                    <div className = "d-flex flex-column">
                <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/dreaming-of-ocean-271942_900x.jpg?v=1637333747" onClick = {()=>this.renderPage()} style = {{width:"20vw",height:"40vh",marginRight:"2px"}}/>
               <h1 style = {{fontSize:"20px",marginTop:"15px"}}>DREAMING OF OCEAN (SAREE)</h1>
               <p>RS.2,800.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/chandrabala-952191_800x.jpg?v=1637157451" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>CHANDRABALA</h1>
               <p>RS.7,200.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/scorpio-stars-582578_800x.jpg?v=1637158243" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>SCORPIO STARS</h1>
               <p>RS.6,300.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/shakha-pola-191698_800x.jpg?v=1637158305" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>SHAKHA POLA</h1>
               <p>RS.3,090.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/chondon-bindi-178996_800x.jpg?v=1637157450" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>CHONDON BINDI</h1>
               <p>RS.3,090.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/kumkum-bindi-802458_800x.jpg?v=1637157827" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>KUMKUM BINDI</h1>
               <p>RS.3,090.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/do-lafzon-ki-kahaani-646272_800x.jpg?v=1637244813" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>DO LAFZON KI KAHAANI</h1>
               <p>RS. 12,000.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/kora-kaagaz-106984_800x.jpg?v=1637244899" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>KORA KAAGAZ (SAREE)</h1>
               <p>RS. 12,000.00</p>
                </div>
                </div>
                <div className="col-4" >
                <div className = "d-flex flex-column">
                    <img src = "https://cdn.shopify.com/s/files/1/0026/6544/7536/products/when-night-falls-833804_800x.jpg?v=1636893123" style = {{width:"20vw",height:"40vh"}}/>
                    <h1 style = {{fontSize:"15px",marginTop:"15px"}}>WHEN NIGHT FALLS</h1>
               <p>RS. 2,300.00</p>
                </div>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Sarees;
