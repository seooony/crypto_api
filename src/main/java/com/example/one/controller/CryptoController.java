    package com.example.one.controller;

    import com.example.one.model.CryptoTicker;
    import com.fasterxml.jackson.core.type.TypeReference;
    import com.fasterxml.jackson.databind.ObjectMapper;
    import org.apache.commons.logging.Log;
    import org.apache.commons.logging.LogFactory;
    import org.springframework.http.HttpEntity;
    import org.springframework.http.HttpHeaders;
    import org.springframework.http.HttpMethod;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;
    import org.springframework.web.client.RestTemplate;
    
    import java.io.IOException;
    import java.util.List;

    @RestController
    @RequestMapping("/crypto")
    @CrossOrigin(origins = "http://your-web-application-domain.com")
    public class CryptoController {

        private Log logger = LogFactory.getLog(this.getClass());

        @GetMapping("/ticker")
        @ResponseBody
        public ResponseEntity<List<CryptoTicker>> getCryptoTicker(@RequestParam String market) throws IOException {
            String url = "https://api.upbit.com/v1/ticker?markets=" + market;

            HttpHeaders headers = new HttpHeaders();
            headers.set("Accept", "application/json");

            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);

            String json = responseEntity.getBody();

            ObjectMapper objectMapper = new ObjectMapper();
            List<CryptoTicker> tickerList = objectMapper.readValue(json, new TypeReference<List<CryptoTicker>>() {});

            return ResponseEntity.ok(tickerList);
        }
    }
