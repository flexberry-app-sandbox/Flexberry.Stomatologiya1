import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISStomatologiyaДолжностьLForm from './forms/i-i-s-stomatologiya-должность-l';
import IISStomatologiyaЗаписьLForm from './forms/i-i-s-stomatologiya-запись-l';
import IISStomatologiyaКабинетLForm from './forms/i-i-s-stomatologiya-кабинет-l';
import IISStomatologiyaКлиентLForm from './forms/i-i-s-stomatologiya-клиент-l';
import IISStomatologiyaМатериалLForm from './forms/i-i-s-stomatologiya-материал-l';
import IISStomatologiyaОплатаLForm from './forms/i-i-s-stomatologiya-оплата-l';
import IISStomatologiyaПроизводительLForm from './forms/i-i-s-stomatologiya-производитель-l';
import IISStomatologiyaРегистрЗаписиLForm from './forms/i-i-s-stomatologiya-регистр-записи-l';
import IISStomatologiyaСотрудникLForm from './forms/i-i-s-stomatologiya-сотрудник-l';
import IISStomatologiyaУслугаLForm from './forms/i-i-s-stomatologiya-услуга-l';
import IISStomatologiyaДолжностьEForm from './forms/i-i-s-stomatologiya-должность-e';
import IISStomatologiyaЗаписьEForm from './forms/i-i-s-stomatologiya-запись-e';
import IISStomatologiyaКабинетEForm from './forms/i-i-s-stomatologiya-кабинет-e';
import IISStomatologiyaКлиентEForm from './forms/i-i-s-stomatologiya-клиент-e';
import IISStomatologiyaМатериалEForm from './forms/i-i-s-stomatologiya-материал-e';
import IISStomatologiyaОплатаEForm from './forms/i-i-s-stomatologiya-оплата-e';
import IISStomatologiyaПроизводительEForm from './forms/i-i-s-stomatologiya-производитель-e';
import IISStomatologiyaРегистрЗаписиEForm from './forms/i-i-s-stomatologiya-регистр-записи-e';
import IISStomatologiyaСотрудникEForm from './forms/i-i-s-stomatologiya-сотрудник-e';
import IISStomatologiyaУслугаEForm from './forms/i-i-s-stomatologiya-услуга-e';
import IISStomatologiyaДокументыModel from './models/i-i-s-stomatologiya-документы';
import IISStomatologiyaДолжностьModel from './models/i-i-s-stomatologiya-должность';
import IISStomatologiyaЗаписьModel from './models/i-i-s-stomatologiya-запись';
import IISStomatologiyaКабинетModel from './models/i-i-s-stomatologiya-кабинет';
import IISStomatologiyaКлиентModel from './models/i-i-s-stomatologiya-клиент';
import IISStomatologiyaМатериалModel from './models/i-i-s-stomatologiya-материал';
import IISStomatologiyaОказаниеУслугModel from './models/i-i-s-stomatologiya-оказание-услуг';
import IISStomatologiyaОплатаModel from './models/i-i-s-stomatologiya-оплата';
import IISStomatologiyaПроизводительModel from './models/i-i-s-stomatologiya-производитель';
import IISStomatologiyaРегистрЗаписиModel from './models/i-i-s-stomatologiya-регистр-записи';
import IISStomatologiyaСоставУслугиModel from './models/i-i-s-stomatologiya-состав-услуги';
import IISStomatologiyaСотрудникModel from './models/i-i-s-stomatologiya-сотрудник';
import IISStomatologiyaУслугаModel from './models/i-i-s-stomatologiya-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-stomatologiya-документы': IISStomatologiyaДокументыModel,
    'i-i-s-stomatologiya-должность': IISStomatologiyaДолжностьModel,
    'i-i-s-stomatologiya-запись': IISStomatologiyaЗаписьModel,
    'i-i-s-stomatologiya-кабинет': IISStomatologiyaКабинетModel,
    'i-i-s-stomatologiya-клиент': IISStomatologiyaКлиентModel,
    'i-i-s-stomatologiya-материал': IISStomatologiyaМатериалModel,
    'i-i-s-stomatologiya-оказание-услуг': IISStomatologiyaОказаниеУслугModel,
    'i-i-s-stomatologiya-оплата': IISStomatologiyaОплатаModel,
    'i-i-s-stomatologiya-производитель': IISStomatologiyaПроизводительModel,
    'i-i-s-stomatologiya-регистр-записи': IISStomatologiyaРегистрЗаписиModel,
    'i-i-s-stomatologiya-состав-услуги': IISStomatologiyaСоставУслугиModel,
    'i-i-s-stomatologiya-сотрудник': IISStomatologiyaСотрудникModel,
    'i-i-s-stomatologiya-услуга': IISStomatologiyaУслугаModel
  },

  'application-name': 'Stomatologiya',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Stomatologiya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Stomatologiya',
          title: 'Stomatologiya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        stomatologiya: {
          caption: 'Stomatologiya',
          title: 'Stomatologiya',
          'i-i-s-stomatologiya-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-stomatologiya-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-stomatologiya-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-stomatologiya-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-stomatologiya-регистр-записи-l': {
            caption: 'Регистр записи',
            title: ''
          },
          'i-i-s-stomatologiya-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-stomatologiya-материал-l': {
            caption: 'Материал',
            title: ''
          },
          'i-i-s-stomatologiya-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-stomatologiya-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-stomatologiya-запись-l': {
            caption: 'Запись',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-stomatologiya-должность-l': IISStomatologiyaДолжностьLForm,
    'i-i-s-stomatologiya-запись-l': IISStomatologiyaЗаписьLForm,
    'i-i-s-stomatologiya-кабинет-l': IISStomatologiyaКабинетLForm,
    'i-i-s-stomatologiya-клиент-l': IISStomatologiyaКлиентLForm,
    'i-i-s-stomatologiya-материал-l': IISStomatologiyaМатериалLForm,
    'i-i-s-stomatologiya-оплата-l': IISStomatologiyaОплатаLForm,
    'i-i-s-stomatologiya-производитель-l': IISStomatologiyaПроизводительLForm,
    'i-i-s-stomatologiya-регистр-записи-l': IISStomatologiyaРегистрЗаписиLForm,
    'i-i-s-stomatologiya-сотрудник-l': IISStomatologiyaСотрудникLForm,
    'i-i-s-stomatologiya-услуга-l': IISStomatologiyaУслугаLForm,
    'i-i-s-stomatologiya-должность-e': IISStomatologiyaДолжностьEForm,
    'i-i-s-stomatologiya-запись-e': IISStomatologiyaЗаписьEForm,
    'i-i-s-stomatologiya-кабинет-e': IISStomatologiyaКабинетEForm,
    'i-i-s-stomatologiya-клиент-e': IISStomatologiyaКлиентEForm,
    'i-i-s-stomatologiya-материал-e': IISStomatologiyaМатериалEForm,
    'i-i-s-stomatologiya-оплата-e': IISStomatologiyaОплатаEForm,
    'i-i-s-stomatologiya-производитель-e': IISStomatologiyaПроизводительEForm,
    'i-i-s-stomatologiya-регистр-записи-e': IISStomatologiyaРегистрЗаписиEForm,
    'i-i-s-stomatologiya-сотрудник-e': IISStomatologiyaСотрудникEForm,
    'i-i-s-stomatologiya-услуга-e': IISStomatologiyaУслугаEForm
  },

});

export default translations;
