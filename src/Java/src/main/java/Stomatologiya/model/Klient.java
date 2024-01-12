package Stomatologiya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Stomatologiya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISStomatologiyaКлиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКлиента")
    private Integer кодклиента;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @Column(name = "ДатаРождения")
    private Date датарождения;

    @OneToMany(mappedBy = "klient", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Dokumenty> dokumentys;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКлиента() {
      return кодклиента;
    }

    public void setКодКлиента(Integer кодклиента) {
      this.кодклиента = кодклиента;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }

    public Date getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Date датарождения) {
      this.датарождения = датарождения;
    }


}