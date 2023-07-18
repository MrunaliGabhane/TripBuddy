# TripBuddy

TripBuddy is a comprehensive platform that offers unforgettable stays and seamless travel experiences. Whether you're a guest looking for the perfect vacation rental or a host wanting to showcase your property, TripBuddy has got you covered.

## Entity Relationship (ER) Diagram

The following ER diagram illustrates the relationships between the entities within the TripBuddy platform:

![ER Diagram](er_diagram.png)

### Overview

The ER diagram represents the relationships between the following entities:

- *Hosts*: Individuals who provide rental properties. Each host can have multiple properties, forming a one-to-many relationship.
- *Properties*: Rental properties offered by hosts. Each property is associated with a single host.
- *Guests*: Individuals who book rental properties. Guests can make multiple bookings.
- *Bookings*: Reservations made by guests for specific properties.

## UI Mockup

### Host Management Page

The host management page allows users to perform CRUD (Create, Read, Update, Delete) operations on host profiles.

- *View Hosts*: Display a list of host profiles.
- *Create Host*: Add a new host profile.
- *Edit Host*: Update an existing host profile.
- *Delete Host*: Remove a host profile from the system.

### Property Management Page

The property management page enables users to manage properties associated with hosts.

- *View Properties*: Show a list of properties.
- *Add Property*: Create a new property.
- *Edit Property*: Modify an existing property.
- *Delete Property*: Remove a property from the system.

### Guest Management Page

The guest management page allows users to handle guest profiles.

- *View Guests*: Display a list of guest profiles.
- *Add Guest*: Create a new guest profile.
- *Edit Guest*: Modify an existing guest profile.
- *Delete Guest*: Remove a guest profile from the system.

### Booking Management Page

The booking management page provides functionality to manage bookings made by guests.

- *View Bookings*: Show a list of bookings.
- *Filter Bookings*: Filter bookings by guest or property.
- *Sort Bookings*: Sort bookings by date or status.

### Property Listing Page

The property listing page allows guests to browse and book available properties.

- *View Properties*: Display a list of available properties.
- *Filter Properties*: Filter properties by location and type.
- *Pagination*: Navigate through multiple property listings.
- *Property Details*: Show more information about a property.
- *Booking Process*: Initiate the booking process for a property.

## API Endpoints

### Host Management API

- *GET* `/api/hosts`: Retrieve all hosts.
- *GET* `/api/hosts/{hostId}`: Retrieve a specific host.
- *POST* `/api/hosts`: Create a new host.
- *PUT* `/api/hosts/{hostId}`: Update a specific host.
- *DELETE* `/api/hosts/{hostId}`: Delete a specific host.

### Property Management API

- *GET* `/api/properties`: Retrieve all properties.
- *GET* `/api/properties/{propertyId}`: Retrieve a specific property.
- *POST* `/api/properties`: Create a new property.
- *PUT* `/api/properties/{propertyId}`: Update a specific property.
- *DELETE* `/api/properties/{propertyId}`: Delete a specific property.

### Guest Management API

- *GET* `/api/guests`: Retrieve all guests.
- *GET* `/api/guests/{guestId}`: Retrieve a specific guest.
- *POST* `/api/guests`: Create a new guest.
- *PUT* `/api/guests/{guestId}`: Update a specific guest.
- *DELETE* `/api/guests/{guestId}`: Delete a specific guest.

### Booking Management API

- *GET* `/api/bookings`: Retrieve all bookings.
- *GET* `/api/bookings/{bookingId}`: Retrieve a specific booking.
- *POST* `/api/bookings`: Create a new booking.
- *PUT* `/api/bookings/{bookingId}`: Update a specific booking.
- *DELETE* `/api/bookings/{bookingId}`: Delete a specific booking.

### Property Listing API

- *GET* `/api/properties/listings`: Retrieve paginated list of properties.
- *GET* `/api/properties/{propertyId}/details`: Retrieve detailed information for a property.

Feel free to customize this README further according to your project requirements and specifications.
