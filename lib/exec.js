var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output


module.exports = function exec(params){
	switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            LED.writeSync(1);
        } else {
            LED.writeSync(0);
        }  
      break;
	}

};

	