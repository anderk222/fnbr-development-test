package fnbr.fnbrform.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fnbr.fnbrform.dto.Response;
import fnbr.fnbrform.service.AreaService;

@RestController
@RequestMapping("/api/v1/area")
@CrossOrigin("*")
public class AreaController {

    @Autowired
    AreaService service;

    @GetMapping()
    public Response findAll() {

        return Response.body(service.findAll());
    }

    @PostMapping("/search")
    public Response search(@RequestBody Map<String, String> data){

        return Response.body(service.search(data.get("name")));

    }

}