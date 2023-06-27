package com.example.getPet.response;

import com.example.getPet.entity.Comment;
import lombok.*;


@Getter
@Setter
@Data
@NoArgsConstructor
public class CommentResponse {
    private Long id;
    private Long userId;
    private String userName;
    private String text;

    public CommentResponse(Comment comment) {
        this.id = comment.getCommentId();
        this.userId = comment.getUser().getId();
        this.userName = comment.getUser().getUserName();
        this.text= comment.getText();
    }

}
