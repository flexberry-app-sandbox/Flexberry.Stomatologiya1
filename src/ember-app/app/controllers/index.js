import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.stomatologiya.caption'),
          title: i18n.t('forms.application.sitemap.stomatologiya.title'),
          children: [{
            link: 'i-i-s-stomatologiya-должность-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-должность-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-услуга-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-услуга-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-клиент-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-производитель-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-производитель-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-регистр-записи-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-регистр-записи-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-регистр-записи-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-кабинет-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-кабинет-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-материал-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-материал-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-сотрудник-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-оплата-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-оплата-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-stomatologiya-запись-l',
            caption: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologiya.i-i-s-stomatologiya-запись-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})