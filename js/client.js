const socket=io('http://localhost:8000');

const form=document.getElementById('send-form');
const input =document.getElementById('message-box');

const messageContainer=document.querySelector('.chat-box');

const name=prompt("enter your name to join");
socket.emit('new-user-joined',name);