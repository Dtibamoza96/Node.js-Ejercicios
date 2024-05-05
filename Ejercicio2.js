PS C:\Users\danie\OneDrive\Escritorio\Ejercicios JS\Node\Ejercicios node> node
Welcome to Node.js v20.9.0.
Type ".help" for more information.
> const crypto = require('crypto');
undefined
> const randomID = crypto.randomBytes(8).toString('hex');   
undefined
> randomID
'9bc3fd8324bacf53'
> exit
Uncaught ReferenceError: exit is not defined
> .exit
PS C:\Users\danie\OneDrive\Escritorio\Ejercicios JS\Node\Ejercicios node> 