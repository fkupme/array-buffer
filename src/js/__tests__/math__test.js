import { Magician } from '../math';
import { Daemon } from '../math';
describe('Math', () => {
	test.each([
		{ damage: 100, reducedDamage: 90, range: 2 },
		{ damage: 100, reducedDamage: 100, range: 1 },
		{ damage: 100, reducedDamage: 60, range: 5 },
		{ damage: 100, reducedDamage: 0, range: 155 },
	])('testing range $range without stoned state', ({ damage, reducedDamage, range }) => {
		const mag = new Magician(damage)
		const dem = new Daemon(damage)
		expect(mag.attack(range)).toBe(reducedDamage)
		expect(dem.attack(range)).toBe(reducedDamage)
	})

	test.each([
		{ damage: 100, reducedDamage: 85, range: 2 },
		{ damage: 100, reducedDamage: 100, range: 1 },
		{ damage: 100, reducedDamage: 48.39035952556319, range: 5 },
		{ damage: 100, reducedDamage: 0, range: 155 },
	])('testing range $range with stoned state', ({ damage, reducedDamage, range }) => {
		const mag = new Magician(damage)
		mag.setState('stoned')
		const dem = new Daemon(damage)
		dem.setState('stoned')
		expect(mag.attack(range)).toBe(reducedDamage)
		expect(dem.attack(range)).toBe(reducedDamage)
	})

})