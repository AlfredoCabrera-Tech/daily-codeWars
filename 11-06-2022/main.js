const basicTest = require('../basicTest')

const languages = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}

function greet(language) {
 return languages[language] || 'Welcome'
}

basicTest(greet('english'), 'Welcome');
basicTest(greet('dutch'), 'Welkom');
basicTest(greet('IP_ADDRESS_INVALID'), "Welcome");