# Bit.Logger
Small logger module to write to the Javascript console

## Usage
Just download the repo or the BitLogger.js file add it to your project and reference it!

**__By default all messages show the Datetime (ISO) and level__** and the message, to change this you should modify the values in the show object to display only what you need, after that is pretty straightforward the use of the module to log the messages

## Examples

```javascript
bitLogger.critical('test');
// outputs: 2018-04-18 17:22:38 | <critical> - test

bitLogger.error(42);
// outputs: 2018-04-18 17:22:38 | <error> - 42

bitLogger.warning(true);
// outputs: 2018-04-18 17:22:38 | <warning> - true

bitLogger.information(new Date());
// outputs: 2018-04-18 17:22:38 | <information> - "2018-04-18T17:22:38.204Z"

bitLogger.verbose([1,5,10]);
// outputs: 2018-04-18 17:22:38 | <verbose> - [1,5,10]

bitLogger.debug({key: 'value'});
// outputs: 2018-04-18 17:22:38 | <debug> - {"key":"value"}
```
