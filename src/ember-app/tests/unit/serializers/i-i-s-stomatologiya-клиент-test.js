import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomatologiya-клиент', 'Unit | Serializer | i-i-s-stomatologiya-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-stomatologiya-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-stomatologiya-единицы',
    'transform:i-i-s-stomatologiya-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
