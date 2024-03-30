function simpleGreeting(name: string): string {
  return `Hello, ${name}!`;
}

function formalGreeting(name: string): string {
  return `Good morning, ${name}. Have a great day!`;
}

function casualGreeting(name: string): string {
  return `Hey there, ${name}! What's up?`;
}

function enthusiasticGreeting(name: string): string {
  return `Hi ${name}! It's fantastic to see you!`;
}

function warmGreeting(name: string): string {
  return `Hi ${name}, hope you're doing well today.`;
}

function professionalGreeting(name: string): string {
  return `Good day, ${name}. I trust you're having a productive day.`;
}

function cheerfulGreeting(name: string): string {
  return `Hi ${name}! Wishing you a bright and cheerful day ahead.`;
}

function respectfulGreeting(name: string): string {
  return `Greetings, ${name}. May your day be filled with respect and kindness.`;
}

function friendlyGreeting(name: string): string {
  return `Hey ${name}, hope you're doing well!`;
}

function energeticGreeting(name: string): string {
  return `Hi ${name}! Ready to tackle the day with energy and enthusiasm?`;
}

const Greets = {
  simpleGreeting,
  energeticGreeting,
  friendlyGreeting,
  respectfulGreeting,
  cheerfulGreeting,
  professionalGreeting,
  warmGreeting,
  enthusiasticGreeting,
  casualGreeting,
  formalGreeting,
};

export default Greets;
