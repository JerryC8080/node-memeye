/*
 * @Author: JerryC (huangjerryc@gmail.com)
 * @Date: 2016-10-20 16:37:32
 * @Last Modified by: JerryC
 * @Last Modified time: 2016-10-25 16:56:54
 * @Description
 */

const SocketClient = require('../node_modules/socket.io-client');

const Controllers = {
  Process: SocketClient.connect('ws://localhost:1339/api/process'),
}

Controllers.Process.on('message', console.log)
Controllers.Process.send('message', 'hi');



