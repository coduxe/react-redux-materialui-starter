import { createStore } from 'redux'
import test from '../../src/reducers/test'

describe('Test reducer', () => {
  let testReducer = createStore(test)

  it('should be an Object', () => {
    expect(testReducer.getState()).toBeInstanceOf(Object)
  })
})
