package garbage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GarbageWebController {

    @RequestMapping("/")
    public String login() {
        return "login";
    }

}
