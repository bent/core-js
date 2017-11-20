QUnit.test('Reflect.getMetadata', assert => {
  const { defineMetadata, getMetadata } = Reflect;
  const { create } = Object;
  assert.isFunction(getMetadata);
  assert.arity(getMetadata, 2);
  assert.name(getMetadata, 'getMetadata');
  assert.looksNative(getMetadata);
  assert.nonEnumerable(Reflect, 'getMetadata');
  assert.throws(() => {
    return getMetadata('key', undefined, undefined);
  }, TypeError);
  assert.same(getMetadata('key', {}, undefined), undefined);
  let object = {};
  defineMetadata('key', 'value', object, undefined);
  assert.same(getMetadata('key', object, undefined), 'value');
  let prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, undefined);
  assert.same(getMetadata('key', object, undefined), 'value');
  assert.same(getMetadata('key', {}, 'name'), undefined);
  object = {};
  defineMetadata('key', 'value', object, 'name');
  assert.same(getMetadata('key', object, 'name'), 'value');
  prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, 'name');
  assert.same(getMetadata('key', object, 'name'), 'value');
});