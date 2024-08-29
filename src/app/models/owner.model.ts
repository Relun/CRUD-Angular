//declaración de la estructura del objeto owner 
//export permite a otros archivos usar esta interface

export interface Owner {
    id: number;
    nombre: string;
    apellido: string;
    rut: string;
    telefono: string;
    correo: string;
}