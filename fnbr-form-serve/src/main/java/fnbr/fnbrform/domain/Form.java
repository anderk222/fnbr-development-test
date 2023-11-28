package fnbr.fnbrform.domain;

import com.google.gson.annotations.Expose;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Form {

    @Expose
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Expose
    @Column(length = 70, nullable = false)
    private String name;

    @Expose
    @Column(length = 70, nullable = false)
    private String lastname;

    @Expose
    @Column(length = 255, nullable = false)
    private String email;

    @Expose
    @Column(length = 15)
    private String phone;
    
    @Expose
    @Column( columnDefinition = "text" )
    private String comments;

    @Expose
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "form")
    private Address address;

    @Expose
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "area_program_id", referencedColumnName = "id")
    private Program program;

    @Expose
    private boolean terms;

    public String getFullName(){

        return this.name +' '+this.getLastname();
    }

}