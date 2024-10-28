export default class ArrayBufferConverter {
	load(buffer){
		this.buffer = buffer();
	}
	toString() {
		const arr = Array.from(new Uint16Array(this.buffer));
    return arr.map(b => String.fromCharCode(b)).join('');
	}
}
