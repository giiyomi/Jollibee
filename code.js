function addressMaker({ city, street }) {
    const newAddress = {
      city,
      street,
      country: "Philippines"
    };
    const {city, street, country(} = newAddress

    console.log(city)
  }

  console.log(addressMaker())


