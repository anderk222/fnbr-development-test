package fnbr.fnbrform.domain;

import com.google.gson.annotations.Expose;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "form_address")
@Data
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Expose
    private Long id;

    @Column(length = 56)
    @Expose
    private String country;

    @Column(length = 56)
    @Expose
    private String state;

    @Column(length = 56)
    @Expose
    private String city;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "form_id", referencedColumnName = "id")
    private Form form;

}
