import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-stomatologiya-должность-l');
  this.route('i-i-s-stomatologiya-должность-e',
  { path: 'i-i-s-stomatologiya-должность-e/:id' });
  this.route('i-i-s-stomatologiya-должность-e.new',
  { path: 'i-i-s-stomatologiya-должность-e/new' });
  this.route('i-i-s-stomatologiya-запись-l');
  this.route('i-i-s-stomatologiya-запись-e',
  { path: 'i-i-s-stomatologiya-запись-e/:id' });
  this.route('i-i-s-stomatologiya-запись-e.new',
  { path: 'i-i-s-stomatologiya-запись-e/new' });
  this.route('i-i-s-stomatologiya-кабинет-l');
  this.route('i-i-s-stomatologiya-кабинет-e',
  { path: 'i-i-s-stomatologiya-кабинет-e/:id' });
  this.route('i-i-s-stomatologiya-кабинет-e.new',
  { path: 'i-i-s-stomatologiya-кабинет-e/new' });
  this.route('i-i-s-stomatologiya-клиент-l');
  this.route('i-i-s-stomatologiya-клиент-e',
  { path: 'i-i-s-stomatologiya-клиент-e/:id' });
  this.route('i-i-s-stomatologiya-клиент-e.new',
  { path: 'i-i-s-stomatologiya-клиент-e/new' });
  this.route('i-i-s-stomatologiya-материал-l');
  this.route('i-i-s-stomatologiya-материал-e',
  { path: 'i-i-s-stomatologiya-материал-e/:id' });
  this.route('i-i-s-stomatologiya-материал-e.new',
  { path: 'i-i-s-stomatologiya-материал-e/new' });
  this.route('i-i-s-stomatologiya-оплата-l');
  this.route('i-i-s-stomatologiya-оплата-e',
  { path: 'i-i-s-stomatologiya-оплата-e/:id' });
  this.route('i-i-s-stomatologiya-оплата-e.new',
  { path: 'i-i-s-stomatologiya-оплата-e/new' });
  this.route('i-i-s-stomatologiya-производитель-l');
  this.route('i-i-s-stomatologiya-производитель-e',
  { path: 'i-i-s-stomatologiya-производитель-e/:id' });
  this.route('i-i-s-stomatologiya-производитель-e.new',
  { path: 'i-i-s-stomatologiya-производитель-e/new' });
  this.route('i-i-s-stomatologiya-регистр-записи-l');
  this.route('i-i-s-stomatologiya-регистр-записи-e',
  { path: 'i-i-s-stomatologiya-регистр-записи-e/:id' });
  this.route('i-i-s-stomatologiya-регистр-записи-e.new',
  { path: 'i-i-s-stomatologiya-регистр-записи-e/new' });
  this.route('i-i-s-stomatologiya-сотрудник-l');
  this.route('i-i-s-stomatologiya-сотрудник-e',
  { path: 'i-i-s-stomatologiya-сотрудник-e/:id' });
  this.route('i-i-s-stomatologiya-сотрудник-e.new',
  { path: 'i-i-s-stomatologiya-сотрудник-e/new' });
  this.route('i-i-s-stomatologiya-услуга-l');
  this.route('i-i-s-stomatologiya-услуга-e',
  { path: 'i-i-s-stomatologiya-услуга-e/:id' });
  this.route('i-i-s-stomatologiya-услуга-e.new',
  { path: 'i-i-s-stomatologiya-услуга-e/new' });
});

export default Router;
