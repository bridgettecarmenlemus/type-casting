function helloWorld(language){
    if (language == 'en') {
        return 'Howdy'
    } else if (language == 'es') {
        return "Hola muchacho"
    } else if (language == 'cz') {
        return "ni hao!"
    }
}

console.log(helloWorld('cz'))


switch(language){
    case 'en':
        return 'Howdy'
        break;
    case 'es':
        return 'hola'
        break;
    case 'cz':
        return 'ni hao!'
        break;
    default:
        return "I don't know. You tell me"
        
}

console.log(helloWorld('cz'))