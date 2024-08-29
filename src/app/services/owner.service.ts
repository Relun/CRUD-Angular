import { Injectable } from '@angular/core';
import { Owner } from '../models/owner.model'; //objeto owner


//el servicio controla la información, desde obtenerla, almacenarla, actualizarla, consultarla y compartirla con los componentes
//un servicio tiene métodos y propiedades
@Injectable({ //el decorador del servicio
  providedIn: 'root' //servivio puede ser inyectado en cualquier componente o servicio de la aplicación, 'root' hace al servicio disponible globalmente
})
export class OwnerService {

  private owners: Owner[] = []; //array vacío que guardará los dueños ingresados
  private currentId = 1; //asignará id único a cada nuevo dueño que se agrega

  getOwners(): Owner[] { //método getowners sirve para obtener la lista de dueños ingresados
    return this.owners;
  }

  addOwner(owner: Owner): void {//addowner agrega un nuevo dueño a la lista
    owner.id = this.currentId++;//entrega un id al nuevo dueño ingresado, ++ sirve para ir incrementando
    this.owners.push(owner);//pushea el nuevo objeto (dueño) a la lista owner
  }

  updateOwner(updatedOwner: Owner): void { //método permite editar al registro ya ingresado
    const index = this.owners.findIndex(p => p.id === updatedOwner.id);//findindex: busca por el index (busca al id que coincida con updateowner)
    if (index > -1) { //si el dueño es encontrado, se edita 
      this.owners[index] = updatedOwner;
    }
  }

  deleteOwner(id: number): void { //elimina al registro
    this.owners = this.owners.filter(p => p.id !== id);//saca al registro a través de un filtro
  }
}
