package fnbr.fnbrform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fnbr.fnbrform.domain.Form;
import fnbr.fnbrform.dto.Response;
import fnbr.fnbrform.service.FormService;
import fnbr.fnbrform.validation.JsonValid;

import static fnbr.fnbrform.validation.SchemaLocations.FORM;

@RestController
@RequestMapping("/api/v1/form")
@CrossOrigin("*")
public class FormController {
 
    @Autowired
    FormService service;

    
    @PostMapping()
    public Response save(@RequestBody @JsonValid(FORM) Form data){

        return Response.body(service.save(data));

    }

    @GetMapping()
    public Response findAll(){

        return Response.body(service.findAll());

    }

}