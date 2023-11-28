package fnbr.fnbrform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fnbr.fnbrform.dto.Identificator;
import fnbr.fnbrform.dto.Response;
import fnbr.fnbrform.service.CityService;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/city")
public class CityController {

    @Autowired
    CityService service;

    @PostMapping("/findByState")
    Response findByState(@RequestBody Identificator data){

        return  Response.body( service.findByState(data.getId()) );

    }

}