const { EventEmitter } = require('events');

// ==========================================
// 1. CUSTOM EVENTEMITTER ("greet" / "exit")
// ==========================================
console.log('--- Task 1: Greet / Exit ---');

class UserSession extends EventEmitter {}
const session = new UserSession();

// Register listeners
session.on('greet', (name) => console.log(`Hello, ${name}!`));
session.on('exit', (name) => console.log(`Goodbye, ${name}!`));

// Trigger events
session.emit('greet', 'Alice');
session.emit('exit', 'Alice');


// ==========================================
// 2. SIMULATE DOM-LIKE EVENT HANDLING
// ==========================================
console.log('\n--- Task 2: DOM-like Structure ---');

class Button extends EventEmitter {}
const button = new Button();

// Register listeners with mock DOM event data
button.on('click', (event) => console.log(`Event: ${event.type} on <${event.target}>`));
button.on('mouseover', (event) => console.log(`Event: ${event.type} on <${event.target}>`));

// Trigger events with event details
button.emit('click', { type: 'click', target: 'button' });
button.emit('mouseover', { type: 'mouseover', target: 'button' });