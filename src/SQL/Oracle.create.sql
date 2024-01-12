



CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Документы"
(

	"primaryKey" RAW(16) NOT NULL,

	"СерияПаспорта" NUMBER(10) NULL,

	"НомерПаспорта" NUMBER(10) NULL,

	"Полис" NUMBER(10) NULL,

	"Клиент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОказаниеУслуг"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"Услуга" RAW(16) NOT NULL,

	"Запись" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Услуга"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодУслуги" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Цена" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКлиента" NUMBER(10) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"ДатаРождения" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Производитель"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РегистрЗаписи"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодЗаписи" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Время" NVARCHAR2(255) NULL,

	"Сумма" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Кабинет"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерКабинета" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Материал"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодМатериала" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Производитель" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодСотрудника" NUMBER(10) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"ДатаРождения" DATE NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Оплата"
(

	"primaryKey" RAW(16) NOT NULL,

	"Оплачено" NUMBER(1) NULL,

	"ТипОплаты" NVARCHAR2(8) NULL,

	"Запись" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Запись"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодЗаписи" NUMBER(10) NULL,

	"Время" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"Сумма" FLOAT(126) NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	"Кабинет" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"Клиент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СоставУслуги"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Единицы" NVARCHAR2(2) NULL,

	"Материал" RAW(16) NOT NULL,

	"Услуга" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Документы"
	ADD CONSTRAINT "Документы_FКл_8790" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "Документы_IКл_5262" on "Документы" ("Клиент");

ALTER TABLE "ОказаниеУслуг"
	ADD CONSTRAINT "ОказаниеУслу_5018" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "ОказаниеУслу_3136" on "ОказаниеУслуг" ("Сотрудник");

ALTER TABLE "ОказаниеУслуг"
	ADD CONSTRAINT "ОказаниеУслуг_778" FOREIGN KEY ("Услуга") REFERENCES "Услуга" ("primaryKey");

CREATE INDEX "ОказаниеУслу_4955" on "ОказаниеУслуг" ("Услуга");

ALTER TABLE "ОказаниеУслуг"
	ADD CONSTRAINT "ОказаниеУслу_6961" FOREIGN KEY ("Запись") REFERENCES "Запись" ("primaryKey");

CREATE INDEX "ОказаниеУслу_6652" on "ОказаниеУслуг" ("Запись");

ALTER TABLE "Материал"
	ADD CONSTRAINT "Материал_FПро_8274" FOREIGN KEY ("Производитель") REFERENCES "Производитель" ("primaryKey");

CREATE INDEX "Материал_IПрои_233" on "Материал" ("Производитель");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_9849" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2523" on "Сотрудник" ("Должность");

ALTER TABLE "Оплата"
	ADD CONSTRAINT "Оплата_FЗапись_0" FOREIGN KEY ("Запись") REFERENCES "Запись" ("primaryKey");

CREATE INDEX "Оплата_IЗапись" on "Оплата" ("Запись");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FКабинет_0" FOREIGN KEY ("Кабинет") REFERENCES "Кабинет" ("primaryKey");

CREATE INDEX "Запись_IКабинет" on "Запись" ("Кабинет");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FСотру_4807" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Запись_IСотру_1458" on "Запись" ("Сотрудник");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FКлиент_0" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "Запись_IКлиент" on "Запись" ("Клиент");

ALTER TABLE "СоставУслуги"
	ADD CONSTRAINT "СоставУслуги__9465" FOREIGN KEY ("Материал") REFERENCES "Материал" ("primaryKey");

CREATE INDEX "СоставУслуги__8739" on "СоставУслуги" ("Материал");

ALTER TABLE "СоставУслуги"
	ADD CONSTRAINT "СоставУслуги__8874" FOREIGN KEY ("Услуга") REFERENCES "Услуга" ("primaryKey");

CREATE INDEX "СоставУслуги__3037" on "СоставУслуги" ("Услуга");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


