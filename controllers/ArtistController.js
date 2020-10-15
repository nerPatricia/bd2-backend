const sequelize = require("sequelize");

const models = require('../app/models');


const createorUpdateArtist = async (data) => {
  const {
    name,
    cnpj,
    email,
    logo,
    mainColor,
    secondColor,
    thirdColor,
    address,
    number,
    complement,
    neighborhood,
    zip,
    city,
    state,
  } = data;
  try {
    const artist = await models.Artist.create({
      name,
      cnpj,
      email,
      logo,
      mainColor,
      secondColor,
      thirdColor,
      address,
      number,
      complement,
      neighborhood,
      zip,
      city,
      state,
    });
    console.log("Artist: name criado")
  } catch (error) {
    console.log("ERRO: ", error)
  }
};

module.exports = createorUpdateArtist;
