import { Component } from '@angular/core';
import { OwnerService } from '../services/owner.service'; //import del servicio que tiene la lógica del crud
import { Owner } from '../models/owner.model'; //import de la clase owner

//@ son decoradores que se usan para modificar o agregar comportamientos a clases, propiedades y métodos
//@Component: se utiliza para definir un componente
@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})

export class OwnersComponent {

  owners: Owner[] = []; //array vacío donde se guardan los registros
  owner: Owner = { id: 0, nombre: '', apellido: '', rut: '', telefono: '', correo: '' };//se inicializa el objeto con id:0, con los atributos del formulario

  //constructor que inyecta el servicio OwnerService, llama al método getOwners del servicio para obtener la lista de dueños y asignarla a la propiedad owners
  constructor(private ownerService: OwnerService) { 
    this.owners = this.ownerService.getOwners();
  }

  onSubmit() {//método que se ejecuta al presionar enviar en el formulario
    if (this.owner.id === 0) { //si el id del owner es 0, indica que es un nuevo dueño que se debe agregar
      this.ownerService.addOwner(this.owner);//si id es 0, se llama al método addOwner del servicio para agregar el nuevo registro
    } else {
      this.ownerService.updateOwner(this.owner);//si id no es 0, se llama al método updateOwne del servicio para actualizar la información del dueño existente
    }
    this.owner = { id: 0, nombre: '', apellido: '', rut: '', telefono: '', correo: '' };//se restablece el objeto para editar o agregar otro registro
  }

  editOwner(owner: Owner) {//método del botón editar
    this.owner = { ...owner };//copia las propiedades del dueño seleccionado (owner) al objeto this.owner, para que el formulario se rellene con los datos del dueño seleccionado para editarlo
  }

  deleteOwner(id: number) {//método del botón eliminar
    this.ownerService.deleteOwner(id);//llama al método deleteOwner del servicio para eliminar al registro con el id que corresponda

}
}
