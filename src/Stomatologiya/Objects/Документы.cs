﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Stomatologiya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Документы.
    /// </summary>
    // *** Start programmer edit section *** (Документы CustomAttributes)

    // *** End programmer edit section *** (Документы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокументыE", new string[] {
            "СерияПаспорта as \'Серия паспорта\'",
            "НомерПаспорта as \'Номер паспорта\'",
            "Полис as \'Полис\'"})]
    public class Документы : ICSSoft.STORMNET.DataObject
    {
        
        private int fСерияПаспорта;
        
        private int fНомерПаспорта;
        
        private int fПолис;
        
        private IIS.Stomatologiya.Клиент fКлиент;
        
        // *** Start programmer edit section *** (Документы CustomMembers)

        // *** End programmer edit section *** (Документы CustomMembers)

        
        /// <summary>
        /// НомерПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Документы.НомерПаспорта CustomAttributes)

        // *** End programmer edit section *** (Документы.НомерПаспорта CustomAttributes)
        public virtual int НомерПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Документы.НомерПаспорта Get start)

                // *** End programmer edit section *** (Документы.НомерПаспорта Get start)
                int result = this.fНомерПаспорта;
                // *** Start programmer edit section *** (Документы.НомерПаспорта Get end)

                // *** End programmer edit section *** (Документы.НомерПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Документы.НомерПаспорта Set start)

                // *** End programmer edit section *** (Документы.НомерПаспорта Set start)
                this.fНомерПаспорта = value;
                // *** Start programmer edit section *** (Документы.НомерПаспорта Set end)

                // *** End programmer edit section *** (Документы.НомерПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Полис.
        /// </summary>
        // *** Start programmer edit section *** (Документы.Полис CustomAttributes)

        // *** End programmer edit section *** (Документы.Полис CustomAttributes)
        public virtual int Полис
        {
            get
            {
                // *** Start programmer edit section *** (Документы.Полис Get start)

                // *** End programmer edit section *** (Документы.Полис Get start)
                int result = this.fПолис;
                // *** Start programmer edit section *** (Документы.Полис Get end)

                // *** End programmer edit section *** (Документы.Полис Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Документы.Полис Set start)

                // *** End programmer edit section *** (Документы.Полис Set start)
                this.fПолис = value;
                // *** Start programmer edit section *** (Документы.Полис Set end)

                // *** End programmer edit section *** (Документы.Полис Set end)
            }
        }
        
        /// <summary>
        /// СерияПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Документы.СерияПаспорта CustomAttributes)

        // *** End programmer edit section *** (Документы.СерияПаспорта CustomAttributes)
        public virtual int СерияПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Документы.СерияПаспорта Get start)

                // *** End programmer edit section *** (Документы.СерияПаспорта Get start)
                int result = this.fСерияПаспорта;
                // *** Start programmer edit section *** (Документы.СерияПаспорта Get end)

                // *** End programmer edit section *** (Документы.СерияПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Документы.СерияПаспорта Set start)

                // *** End programmer edit section *** (Документы.СерияПаспорта Set start)
                this.fСерияПаспорта = value;
                // *** Start programmer edit section *** (Документы.СерияПаспорта Set end)

                // *** End programmer edit section *** (Документы.СерияПаспорта Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Stomatologiya.Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Документы.Клиент CustomAttributes)

        // *** End programmer edit section *** (Документы.Клиент CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Клиент"})]
        public virtual IIS.Stomatologiya.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Документы.Клиент Get start)

                // *** End programmer edit section *** (Документы.Клиент Get start)
                IIS.Stomatologiya.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Документы.Клиент Get end)

                // *** End programmer edit section *** (Документы.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Документы.Клиент Set start)

                // *** End programmer edit section *** (Документы.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Документы.Клиент Set end)

                // *** End programmer edit section *** (Документы.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокументыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокументыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокументыE", typeof(IIS.Stomatologiya.Документы));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Документы.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfДокументы CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfДокументы CustomAttributes)
    public class DetailArrayOfДокументы : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Stomatologiya.DetailArrayOfДокументы members)

        // *** End programmer edit section *** (IIS.Stomatologiya.DetailArrayOfДокументы members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Документы by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Документы.
        /// </summary>
        public DetailArrayOfДокументы(IIS.Stomatologiya.Клиент fКлиент) : 
                base(typeof(Документы), ((ICSSoft.STORMNET.DataObject)(fКлиент)))
        {
        }
        
        public IIS.Stomatologiya.Документы this[int index]
        {
            get
            {
                return ((IIS.Stomatologiya.Документы)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Stomatologiya.Документы dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
