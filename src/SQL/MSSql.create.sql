



CREATE TABLE [Должность] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодДолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Документы] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [НомерПаспорта] INT  NULL,

	 [Полис] INT  NULL,

	 [СерияПаспорта] INT  NULL,

	 [Клиент] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОказаниеУслуг] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудник] UNIQUEIDENTIFIER  NOT NULL,

	 [Услуга] UNIQUEIDENTIFIER  NOT NULL,

	 [Запись] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Услуга] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодУслуги] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Цена] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Клиент] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаРождения] DATETIME  NULL,

	 [Имя] VARCHAR(255)  NULL,

	 [КодКлиента] INT  NULL,

	 [НомерТелефона] INT  NULL,

	 [Отчество] VARCHAR(255)  NULL,

	 [Фамилия] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Производитель] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [РегистрЗаписи] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Время] VARCHAR(255)  NULL,

	 [Дата] DATETIME  NULL,

	 [КодЗаписи] INT  NULL,

	 [Сумма] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Кабинет] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [НомерКабинета] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Материал] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодМатериала] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Производитель] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотрудник] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаРождения] DATETIME  NULL,

	 [Имя] VARCHAR(255)  NULL,

	 [КодСотрудника] INT  NULL,

	 [НомерТелефона] INT  NULL,

	 [Отчество] VARCHAR(255)  NULL,

	 [Фамилия] VARCHAR(255)  NULL,

	 [Должность] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Оплата] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Оплачено] BIT  NULL,

	 [ТипОплаты] VARCHAR(8)  NULL,

	 [Запись] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Запись] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Время] VARCHAR(255)  NULL,

	 [Дата] DATETIME  NULL,

	 [КодЗаписи] INT  NULL,

	 [Комментарий] VARCHAR(255)  NULL,

	 [Сумма] FLOAT  NULL,

	 [Кабинет] UNIQUEIDENTIFIER  NOT NULL,

	 [Клиент] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудник] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СоставУслуги] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Единицы] VARCHAR(2)  NULL,

	 [Количество] INT  NULL,

	 [Материал] UNIQUEIDENTIFIER  NOT NULL,

	 [Услуга] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




