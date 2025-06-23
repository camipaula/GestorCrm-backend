const TipoServicio = require("../models/TipoServicio.model");

const obtenerTiposServicio = async (req, res) => {
  try {
    const tipos = await TipoServicio.findAll({
      attributes: ["id_tipo_servicio", "nombre"],
      order: [["nombre", "ASC"]]
    });

    res.json(tipos);
  } catch (error) {
    console.error("Error al obtener tipos de servicio:", error);
    res.status(500).json({ message: "Error al obtener tipos de servicio", error });
  }
};

module.exports = { obtenerTiposServicio };
