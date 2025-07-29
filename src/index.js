const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database");

// Importar rutas
const authRoutes = require("./routes/auth.routes");
const prospectoRoutes = require("./routes/prospecto.routes");
const usuarioRoutes = require("./routes/usuario.routes");
const ventaRoutes = require("./routes/venta.routes"); 
const seguimientoRoutes = require("./routes/seguimiento.routes"); 
const categoriasRoutes = require("./routes/categorias");
const dashboardRoutes = require("./routes/dashboard.routes");
const tipoServicioRoutes = require("./routes/tipos-servicio.routes"); 

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware
app.use(cors({
  origin: ["http://147.93.10.109:8082", "https://gestortax.neola.app","http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
})); 
app.use(express.json());

// Definir rutas
app.use("/api/auth", authRoutes);
app.use("/api/prospectos", prospectoRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/ventas", ventaRoutes); 
app.use("/api/seguimientos", seguimientoRoutes); 
app.use("/api/categorias", categoriasRoutes);
// Agregar la ruta del dashboard
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/tipos-servicio", tipoServicioRoutes); 


// Importar asociaciones entre modelos antes de sincronizar
require("./models/associations");

// Configuración del servidor
const PORT = process.env.PORT || 5000;

// Iniciar servidor y conectar base de datos
app.listen(PORT, async () => {
console.log(`Servidor corriendo en puerto ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log(" Conexión a la base de datos establecida.");
  
   // await sequelize.sync(); 
  // console.log(" Tablas sincronizadas.");
    
  } catch (error) {
    console.error(" Error al conectar la base de datos:", error);
  }
});