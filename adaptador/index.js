const AnalyticsLibrary = require('./AnalyticsLibrary');                         
const JsonReader = require('./JsonReader');
const JSONToXMLAdapter = require('./JSONToXMLAdapter');

const initialDataInstance = new JsonReader();                                   // Instance of class JsonReader

const data = new JSONToXMLAdapter(initialDataInstance).read();                  // Instance of class JSONToXMLAdapter

new AnalyticsLibrary().process(data);                                           // Instance of class AnalyticsLibrary