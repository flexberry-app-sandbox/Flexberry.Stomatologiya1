package Stomatologiya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Stomatologiya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ОказаниеУслуг
 */
@Entity(name = "IISStomatologiyaОказаниеУслуг")
@Table(schema = "public", name = "ОказаниеУслуг")
public class OkazanieUslug {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Usluga")
    @Convert("Usluga")
    @Column(name = "Услуга", length = 16, unique = true, nullable = false)
    private UUID _uslugaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Usluga", insertable = false, updatable = false)
    private Usluga usluga;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zapis")
    @Convert("Zapis")
    @Column(name = "Запись", length = 16, unique = true, nullable = false)
    private UUID _zapisid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zapis", insertable = false, updatable = false)
    private Zapis zapis;


    public OkazanieUslug() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}