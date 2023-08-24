import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Exsisting Inventory"
            />
             <Section title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Exsisting Inventory"
            />
            <Section title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Exsisting Inventory"
            />
           
            
            <Section title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Exsisting Inventory"
            />
            <Section title="Lowest Cost Solar Panels in America"
                description="Money-back Guarantee"
                backgroundImg="solar-panel.jpg"
                leftbtntext="Order NoW"
                rightbtntext="Learn More"
            />
            
            <Section title="Solar for New Roofs"
                description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftbtntext="Shop NoW"
                rightbtntext="Learn More"
            />
            
            <Section title="Accessories"
                
                backgroundImg="accessories.jpg"
                leftbtntext="Shop NoW"
                
            />
            


        </Container>
    )
}
// background-image:url('/images/model-s.jpg');
// background-image:${(props)=>{props.bgImage)}};
export default Home
const Container = styled.div`
height:100vh;
 
`