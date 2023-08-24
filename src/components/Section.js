import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section(props) {
    const bg = props.backgroundImg
    return (

        <Wrap bgImage={bg}>
            <Fade bottom>
                <Itemtext>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </Itemtext>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <Buttongroup>
                        <Leftbutton>
                            {props.leftbtntext}
                        </Leftbutton>
                        {props.rightbtntext && <Rightbutton>
                            {props.rightbtntext}
                        </Rightbutton>}


                    </Buttongroup>
                </Fade>
                <Downarrow src="/images/down-arrow.svg"></Downarrow>
            </Buttons>

        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width:100%;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    
    background-image:${(props) => `url('/images/${props.bgImage}')`};
 
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    
`
const Itemtext = styled.div`
    padding-top:15vh;
    text-align:center;
`
const Buttons = styled.div`

`
const Buttongroup = styled.div`

    display:flex;
    margin-bottom:30px;
    @media (max-width:768px)
    {
        flex-direction:column;
    }
    

 
`
const Leftbutton = styled.div`
background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:14px;
    margin:10px;
    cursor:pointer;
`
const Rightbutton = styled(Leftbutton)`
background-color:white;
opacity:0.65s;
color:black;
`
const Downarrow = styled.img`   
    
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`