const apiKey = 'VZpaOiiu9FYXMIIrOHFkWPdwJwSlIoTs6EEo25CPKYXi7rKdMdTacxndP3bSEZP3J6w4hAW_-dT5c7jioa-expszcr77oQFrRPVLWqpQdg0O2fbuhD_pTpV3e1b5XnYx';
export const yelp = {
    search(term, location, sortBy) {
        return fetch (
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}}
        ).then(
            response => response.json()
        ).then(
            jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map( business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        }
                    });
                }
            }
        );
    }
};