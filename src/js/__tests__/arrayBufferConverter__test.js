import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../array-buffer';


describe('BufferConverter',()=>{

	it('should convert string to ArrayBuffer',()=>{
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer);
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});