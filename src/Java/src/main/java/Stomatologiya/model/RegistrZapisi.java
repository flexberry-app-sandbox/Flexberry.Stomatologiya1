package Stomatologiya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Stomatologiya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: РегистрЗаписи
 */
@Entity(name = "IISStomatologiyaРегистрЗаписи")
@Table(schema = "public", name = "РегистрЗаписи")
public class RegistrZapisi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЗаписи")
    private Integer кодзаписи;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Время")
    private String время;

    @Column(name = "Сумма")
    private Double сумма;


    public RegistrZapisi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодЗаписи() {
      return кодзаписи;
    }

    public void setКодЗаписи(Integer кодзаписи) {
      this.кодзаписи = кодзаписи;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}