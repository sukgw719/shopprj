package prj.shopmall.shopmall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class linkController {

    @GetMapping("/upDown")
    public String upDown(){
        return "upDown";
    }

    @GetMapping("/todoApp")
    public String todoApp(){
        return "todoApp";
    }
}
