package com.example.getPet.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Data
public class TakeCarePostCreateRequest {

    private String title;
    private String content;
    private Long userId;
    private String city;
    private int age;
    private String kind;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private float price;
    private String specialNeeds;

}
