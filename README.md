# Bit.Logger.Js
Small logger module to write to the Javascript console

## Usage
Just download the repo or the BitLogger.js file add it to your project and reference it!

**__By default all messages show the Datetime (ISO) and level__** and the message, to change this you should modify the values in the show object to display only what you need, after that is pretty straightforward the use of the module to log the messages

## Examples
```javascript
bitLogger.critical('lorem ipsum dolor sit amet');
// outputs: 2018-04-05 23:50:44 | <critical> - lorem ipsum dolor sit amet

bitLogger.critical({a: 'objects are stringified', b: 1, c: false, d:[4,2]}); 
// outputs 2018-04-05 23:52:07 | <critical> - {"a":"objects are stringified","b":1,"c":false,"d":[4,2]}
```
