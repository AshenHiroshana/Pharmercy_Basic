package bit.project.server.entity;

import lombok.Data;
import java.util.List;
import javax.persistence.*;
import javax.persistence.Id;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Data
@Entity
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Paymentstatus{
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String name;


    @JsonIgnore
    @OneToMany(mappedBy = "paymentstatus")
    private List<Customerpayment> paymentstatusCustomerpaymentList;

    @JsonIgnore
    @OneToMany(mappedBy = "paymentstatus")
    private List<Customerreturn> paymentstatusCustomerreturnList;

    @JsonIgnore
    @OneToMany(mappedBy = "paymentstatus")
    private List<Supplierpayment> paymentstatusSupplierpaymentList;

    @JsonIgnore
    @OneToMany(mappedBy = "paymentstatus")
    private List<Supplierreturn> paymentstatusSupplierreturnList;


    public Paymentstatus(Integer id){
        this.id = id;
    }

}