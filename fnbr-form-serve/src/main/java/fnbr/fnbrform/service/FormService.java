package fnbr.fnbrform.service;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fnbr.fnbrform.domain.Form;
import fnbr.fnbrform.repository.FormRepository;
import fnbr.fnbrform.util.EmailService;

@Service
public class FormService {

    FormRepository repository;

    private ExecutorService nonBlockingService = Executors
            .newCachedThreadPool();

    @Autowired
    EmailService emailService;

    public FormService(FormRepository repository) {

        this.repository = repository;

    }

    public Form save(Form data) {

        Form form = repository.save(data);

        nonBlockingService.execute(()->sendConfirmSaveEmail(form));

        return form;

    }

    public List<Form> findAll() {

        return repository.findAll();

    }

    private void sendConfirmSaveEmail(Form form) {

        String message = String.format("Hey %s, you request's going to checkout", form.getFullName());

        emailService.sendEmail(form.getEmail(), "Funiber Form", message);

    }

}