import HelloWord from '../src'
import { assert } from 'chai'


describe('Test HelloWord Class', () => {
    describe('Test sayHello method', () => {
        it(`If sayHello is called with a name this need to return 'Hello {name}'`, () => {
            const response = HelloWord.sayHello('Andres');
            assert.equal('Hello Andres', response);
        })
    })
})