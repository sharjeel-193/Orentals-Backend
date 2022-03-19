// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//We import Object and Document Schema
import property from './property'
import propertyImage from './propertyImage'
import review from './review'
import person from './person'
import traveller from './traveller'
import host from './host'

// Then we give our schema to the builder and provide the result to Sanity

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    property,
    propertyImage,
    review,
    person,
    host,
    traveller
  ]),
})
