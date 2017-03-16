// This file was procedurally generated from the following sources:
// - src/generators/yield-identifier-spread-non-strict.case
// - src/generators/non-strict/expression.template
/*---
description: Mixed use of object spread and yield as a valid identifier in a function body inside a generator body in non strict mode (Generator expression - valid for non-strict only cases)
esid: prod-GeneratorExpression
features: [object-spread]
flags: [generated, noStrict]
info: |
    14.4 Generator Function Definitions

    GeneratorExpression:
      function * BindingIdentifier opt ( FormalParameters ) { GeneratorBody }

    Spread Properties

    PropertyDefinition[Yield]:
      (...)
      ...AssignmentExpression[In, ?Yield]

---*/

var callCount = 0;

var gen = function *() {
  callCount += 1;
  yield {
       ...yield yield,
       ...(function(arg) {
          var yield = arg;
          return {...yield};
       }(yield)),
       ...yield,
    }
};

var iter = gen();

var iter = gen();

iter.next();
iter.next();
iter.next({ x: 10, a: 0, b: 0 });
iter.next({ y: 20, a: 1, b: 1 });
var item = iter.next({ z: 30, b: 2 });

assert.sameValue(item.done, false);
assert.sameValue(item.value.x, 10);
assert.sameValue(item.value.y, 20);
assert.sameValue(item.value.z, 30);
assert.sameValue(item.value.a, 1);
assert.sameValue(item.value.b, 2);
assert.sameValue(Object.keys(item.value).length, 5);

assert.sameValue(callCount, 1);
