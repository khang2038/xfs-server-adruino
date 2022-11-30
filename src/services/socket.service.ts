import { create } from './specification.service';
import { Specifications } from 'src/entities/specifications.entity';
import { Socket } from "socket.io";

export const disconnect = (socket: Socket) => {
  console.info('user disconect ' + socket.id);
};

export const saveSpecification = async (param:Specifications)=>{
  await create(param);
}