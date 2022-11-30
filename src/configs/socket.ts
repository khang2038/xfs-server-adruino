import { saveSpecification } from './../services/socket.service';
import { Specifications } from './../entities/specifications.entity';
import { ESocketEvent } from '../interfaces/socket.interface';
import * as socketService from '../services/socket.service';
import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';
import * as specificationService from '../services/specification.service';

export class ServerSocket {
  public static instance: ServerSocket;
  public io: Server;

  constructor(server: HttpServer) {
    ServerSocket.instance = this;
    this.io = new Server(server, {
      cors: {
        origin: '*',
      },
    });
  }

  public async listeners(socket: Socket) {
    
    socket.join(['3561c033-e69e-4a1e-936f-9bd19f8e519a','ce3c69e5-2992-40f4-8f4e-8873d702e018']);

    socket.on(ESocketEvent.Specification,async (param:Specifications)=>{
        await saveSpecification(param);
    })

    const specifications = await specificationService.getAll();
    const temperatures = await specificationService.getTemperature();
    const COConcentration = await specificationService.getCOConcentration();
    const LPGGasConcentration = await specificationService.getLPGGasConcentration();
    
    socket.emit(ESocketEvent.GetSpecification,{specifications});
    socket.emit(ESocketEvent.GetTemperatures,{temperatures});
    socket.emit(ESocketEvent.GetCOConcentration,{COConcentration});
    socket.emit(ESocketEvent.GetLPGGasConcentration,{LPGGasConcentration})

    socket.on(ESocketEvent.Disconnect, () => {
      socketService.disconnect(socket);
    });

  }
  public start() {
    this.io.on(ESocketEvent.Connection, this.listeners);
    console.info('Socket IO started.');
  }
}
