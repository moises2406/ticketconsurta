export function onConnect() {
    return({config:true, msg:'este servidor esta connectado a internet'});
    
  }
  export function onDisconnect() {
    console.log(false, 'este servidor no esta connectado a internet o tiene un problema');
  }

  export function onFooEvent(value: any) {
    console.log((previous: any) => [...previous, value]);
  }