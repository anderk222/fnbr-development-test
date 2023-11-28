package fnbr.fnbrform.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fnbr.fnbrform.dto.Response;
import fnbr.fnbrform.service.CountryService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/country")
public class CountryController  {

    @Autowired
    CountryService service;

    @PostMapping("/search")
    Response search(@RequestBody Map<String, String> data){

        return Response.body(service.search(data.get("name")));

    }

}