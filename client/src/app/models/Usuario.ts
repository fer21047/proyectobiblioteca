export interface Usuarios {
  IdUsuario: number;
  Nombre: string;
  Correo: string;
  FechaNac: string;
  Direccion: string;
  Telefono: string;
  Password: string;
  IdTipoUsuario: number | null;
}
