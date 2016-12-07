//
// fabnetclient.js
// Nadya Peek 2016 peek@mit.edu
//
// purpose:
// this module sends commands to the fabnetserver.js
// and uses them to run the pygestalt virtual machine "fabnet_xyaxes.py".
// you can replace fabnet_xyaxes.py with your own virtual machine.
// 
// dependencies:
// ws (npm install ws)
// pyserial (apt-get install python-serial)
// pygestalt (git clone http://github.com/nadya/pygestalt, python setup.py install)
// the folder you run this in also needs to contain 
// fabnet_xyaxes.py
// 086-005a.py
//
// usage:
// generate a virtual machine file by running your virtual machine
// then
// run the fabnetserver (node fabnetserver.js)
// it should say
// "listening for connections from 127.0.0.1 on 1234"
// add this module at mods.cba.mit.edu
// press "connect to server"
// it should say connected to 127.0.0.1:1234
// fill in a path (e.g. [[[10,20]],[[0,0]]])
// press "send path"
// this should  move your axes.
//
//
// closure
//
(function(){
//
// module globals
//
var mod = {}
//
// name
//
var name = 'fabnet'
//
// initialization
//
var init = function() {
   mod.address.value = '127.0.0.1'
   mod.port.value = 1234
   mod.moveargs.value = [[0,0,0]]
   }
//
// inputs
//
var inputs = {
   moveargs:{type:'String',
      event:function(evt){
         mod.moveargs.value = evt.detail
         send_moves()}}}
//
// outputs
//
var outputs = {
   }
//
// interface is run any of these event functions from inputs
//
var interface = function(div){
   mod.div = div
   div.appendChild(document.createTextNode('address: '))
   input = document.createElement('input')
      input.type = 'text'
      input.size = 10
      div.appendChild(input)
      mod.address = input
   div.appendChild(document.createElement('br'))
   div.appendChild(document.createTextNode('port: '))
   input = document.createElement('input')
      input.type = 'text'
      input.size = 6
      div.appendChild(input)
      mod.port = input
   div.appendChild(document.createElement('br'))
   var btn = document.createElement('button')
      btn.style.margin = 1
      btn.appendChild(document.createTextNode('connect to server'))
      btn.addEventListener('click',function() {
         init_server()
         console.log("connected to server")
         })
      div.appendChild(btn)
   div.appendChild(document.createElement('br'))
   div.appendChild(document.createTextNode('path:'))
   div.appendChild(document.createElement('br'))
   var input = document.createElement('input')
      input.type = 'text'
      input.size = 12
      //input.addEventListener('change',function() {
      //   send_moves()
      //   })
      div.appendChild(input)
      mod.moveargs = input //mod.moveargs is the html element
   div.appendChild(document.createElement('br'))
   var send = document.createElement('button')
      send.style.margin = 1
      send.appendChild(document.createTextNode('send path'))
      send.addEventListener('click',function() {
         send_moves()
         console.log("sent moves")
         })
      div.appendChild(send)
   div.appendChild(document.createElement('br'))
   div.appendChild(document.createTextNode('response:'))
   div.appendChild(document.createElement('br'))
   var text = document.createElement('textarea')
      text.setAttribute('rows',mods.ui.rows)
      text.setAttribute('cols',mods.ui.cols)
      div.appendChild(text)
      mod.resp = text
   }
//
// local functions
//
function init_server() {
   var url = "ws://"+mod.address.value+':'+mod.port.value
   var ws = new WebSocket(url)
   mod.ws = ws
   ws.onerror = function(event) {
      mod.resp.value = 'cannot connect to '+mod.address.value+':'+mod.port.value
      }
   ws.onopen = function(event) {
      mod.resp.value = 'connected to '+mod.address.value+':'+mod.port.value
      // ws.send('server.worker = '+worker.toString())
      }
   ws.onmessage = function(event) {
      mod.resp.value = event.data
      }
   }
function send_moves() {
   mod.ws.send(mod.moveargs.value);
   }

//
// return values
//
return ({
   name:name,
   init:init,
   inputs:inputs,
   outputs:outputs,
   interface:interface
   })
}())

