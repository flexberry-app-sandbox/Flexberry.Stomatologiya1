import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomatologiya-кабинет', 'Unit | Model | i-i-s-stomatologiya-кабинет', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-stomatologiya-документы',
    'model:i-i-s-stomatologiya-должность',
    'model:i-i-s-stomatologiya-запись',
    'model:i-i-s-stomatologiya-кабинет',
    'model:i-i-s-stomatologiya-клиент',
    'model:i-i-s-stomatologiya-материал',
    'model:i-i-s-stomatologiya-оказание-услуг',
    'model:i-i-s-stomatologiya-оплата',
    'model:i-i-s-stomatologiya-производитель',
    'model:i-i-s-stomatologiya-регистр-записи',
    'model:i-i-s-stomatologiya-состав-услуги',
    'model:i-i-s-stomatologiya-сотрудник',
    'model:i-i-s-stomatologiya-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
