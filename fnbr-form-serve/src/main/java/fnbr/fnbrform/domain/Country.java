package fnbr.fnbrform.domain;

import com.google.gson.annotations.Expose;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Country {

    @Expose
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Expose
    @Column(length = 159, nullable = false,unique = true)
    private String name;

    @Expose
    @Column(nullable = false, length = 3)
    private String sortname;
    
    @Column(nullable = false, name="phonecode")
    @Expose
    private int phonecode;
}
