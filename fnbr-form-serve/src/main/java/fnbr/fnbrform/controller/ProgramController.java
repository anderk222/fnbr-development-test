package fnbr.fnbrform.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fnbr.fnbrform.dto.Identificator;
import fnbr.fnbrform.dto.Response;
import fnbr.fnbrform.service.ProgramService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/area-program")
public class ProgramController {
    
    @Autowired
    ProgramService service;

    @PostMapping("/findByArea")
    public Response findByArea(@RequestBody Identificator data){

        return Response.body(service.findByArea(data.getId()));

    }

}
