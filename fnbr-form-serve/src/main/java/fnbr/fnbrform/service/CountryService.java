package fnbr.fnbrform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import fnbr.fnbrform.domain.Country;
import fnbr.fnbrform.repository.CountryRepository;

@Service
public class CountryService  {

    CountryRepository repository;

    public CountryService(CountryRepository repository){

        this.repository=repository;

    }

    public List<Country> search(String name){

        return repository.findByNameContainingIgnoreCase(name);

    }

}