package fnbr.fnbrform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fnbr.fnbrform.dto.Identificator;
import fnbr.fnbrform.dto.Response;
import fnbr.fnbrform.service.StateService;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/state")
public class StateController {

    @Autowired
    StateService service;

    @PostMapping("/findByCountry")
    Response findByCountry(@RequestBody Identificator data){

        return  Response.body( service.findByCountry(data.getId()) );

    }

}