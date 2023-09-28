import app from "./external/api/config";
import ConsultarUsuarioPorId from "./core/usuario/service/ConsultarUsuarioPorId";
import ConsultarUsuarioPorIdController from "./adapters/ConsultarUsuarioPorIdController";
import ConsultarUsuarios from "./core/usuario/service/ConsultarUsuarios";
import ConsultarUsuariosController from "./adapters/ConsultarUsuariosController";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RepositorioUsuarioMemoria from "./external/memoria/RepositorioUsuarioMemoria";

// -------------------------------- Registrar Rotas

const repositorioUsuario = new RepositorioUsuarioMemoria();
const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
new RegistrarUsuarioController(app, registrarUsuario);

const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario); // Corrija o nome da variável
new ConsultarUsuariosController(app, consultarUsuarios);

const consultarUsuarioPorId = new ConsultarUsuarioPorId(repositorioUsuario); // Corrija o nome da variável
new ConsultarUsuarioPorIdController(app, consultarUsuarioPorId);

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
