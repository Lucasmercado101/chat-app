// import {
//   SubscribeMessage,
//   WebSocketGateway,
//   OnGatewayInit,
//   WebSocketServer,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
// } from '@nestjs/websockets';
// import { Logger } from '@nestjs/common';
// import { Socket, Server } from 'socket.io';

// @WebSocketGateway()
// export class EventsGateway
//   implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
// {
//   @WebSocketServer() server: Server;
//   private logger: Logger = new Logger('AppGateway');

//   @SubscribeMessage('msgToServer')
//   handleMessage(client: Socket, payload: string): void {
//     this.server.emit('msgToClient', payload);
//   }

//   afterInit(server: Server) {
//     this.logger.log('Init');
//   }

//   handleDisconnect(client: Socket) {
//     this.logger.log(`Client disconnected: ${client.id}`);
//   }

//   handleConnection(client: Socket, ...args: any[]) {
//     this.logger.log(`Client connected: ${client.id}`);
//   }
// }

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { allowedHeaders: true } })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('test')
  findAll(@MessageBody() data: string): string {
    return 'yellow ' + data;
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
