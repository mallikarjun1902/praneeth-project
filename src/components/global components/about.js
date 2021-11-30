//Importing React component from React Library
import React, { Component } from 'react';

/**
 * @authors : "madhavi itikala and Spandana"
 * @returns {Html}
 * @description Creating a functional component and returns UI on the browser.
 * Implementation of About Component.
 * In this file,we describing about suta website what gone do suta website and how this site is useful for users.
 */

const About = () => { 
    return (
        <>
            <div class="container d-flex flex-row justify-content-center">
                <h1 style={{ fontSize: "25px", fontFamily: "italic", padding: "10px" }}>About Us</h1>
            </div>
            <div class="container ">
                <p style={{ marginLeft: "20px" }}>Welocme to suta</p>
                <p>Suta is the most humble product we meet and live with every day. It means thread. Su- Sujata and Ta- Taniya were elated when they discovered the magic of the syllables in their names. It feels that it’s meant to be. Silly childhood game of selling bags made out of handkerchief suddenly started looking like a signal. Su and Ta always had a special liking for the countless and varied forms of art and culture across India. Even after spending many years in the corporate world, theirpassion never abated. Thus in 2015, fighting many odds, Suta was born. </p>
                <p>The brand SUTA is a fresh design house that centers on creating a range of attire with a blend of tradition and contemporaneity. Suta’s crafted inspirations pay attention to details and the designs add elegance, boldness and grace. SUTA or thread, the basis of the brand's inspiration is a reminder of the craft traditions of India. Like a pure creation that begins with a needle and thread, SUTA offers novelty each time it is experienced.</p>
                <p>Suta is the maker of simple and humble designs using our very own and known fabrics to make our souls sing with joy. Artisans from all around the country create raw and uninhibited designs usingtheir ancestral weaving processes. Suta talks to tradition and weaves its own creation. We salute their craftsmanship and are thankful to them for keeping this art alive. Suta products are just a token of representation of the innumerous souls who have touched the fabric. We aspire to keep the undying spirit of artistry alive.</p>
                <p style={{ fontWeight: "bold" }}>Suta celebrates raw threads, traditional boldness and uninterrupted simplicity!</p>
            </div>
        </>
    );
}

//Exporting file
export default About;
