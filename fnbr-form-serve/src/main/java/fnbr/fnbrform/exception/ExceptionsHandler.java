package fnbr.fnbrform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;

import fnbr.fnbrform.dto.Response;
import fnbr.fnbrform.dto.ResponseEnum;



@ControllerAdvice
public class ExceptionsHandler {


    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public ResponseEntity<Response> handleNoHandlerFoundException(NoHandlerFoundException ex) {

        ex.printStackTrace();

        return ResponseEntity.ok(Response.resEnum(ResponseEnum.NOT_FOUND));

    }

    @ExceptionHandler(JsonSchemaValidationException.class)
    public ResponseEntity<Response> handleJsonSchemaValidationException(JsonSchemaValidationException ex) {

        Response response = Response.resEnum(ResponseEnum.BAD_REQUEST).msgUsuario(ex.getReason());

        ex.printStackTrace();

        return ResponseEntity.ok(response);

    }

    @ExceptionHandler(NoSendedEmailException.class)
    @ResponseStatus(code = HttpStatus.OK)
    public ResponseEntity<Response> handleNoSendedEmailException(NoSendedEmailException ex){

        ex.printStackTrace();

        return ResponseEntity.ok(Response.resEnum(ResponseEnum.EMAIL_NOT_SEND));
        

    }


    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(code = HttpStatus.OK)
    public ResponseEntity<Response> handleRuntimeException(RuntimeException ex) {

        ex.printStackTrace();

        return ResponseEntity.ok(Response.resEnum(ResponseEnum.INTERNAL_ERROR));

    }

}