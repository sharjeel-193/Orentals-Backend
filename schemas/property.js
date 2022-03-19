export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        },
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    {title: 'House', value: 'house'},
                    {title: 'Flat', value: 'flat'},
                    {title: 'Hotel', value: 'hotel'}
                ],
                layout: 'radio'
            },
        },
        {
            name: 'mainImage',
            title: 'Property Images',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'propertyImage'}]
        },
        {
            name: 'pricePerNight',
            title: 'Price Per Night',
            type: 'number'
        },
        {
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options:{
                source: 'title',
                maxLength: 100
            }
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'host',
            title: 'Host',
            type: 'host'
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{type: 'review'}]
        }

    ]
}