import React from 'react';
import { Text, Button, } from 'react-native';
import { Card } from 'react-native-elements'

export default function HubCard(props){

    const {id, name, rating, description, reviews} = props
    
    console.log(props)
    return (
        <Card>
            <Text style={{ marginBottom: 10 }}>
                {name}
            </Text>
            <Text>
                Rating: {props.renderStars(rating)}
            </Text>
            <Button
                title="View More"
                
                onPress={()=>{props.navigation.navigate('HubShow',{
                    rating: rating,
                    name: name,
                    id: id,
                    description: description,
                    reviewsLength: reviews.length,
                    reviews: reviews
                })}}
            />
        </Card>
        
    )
}
