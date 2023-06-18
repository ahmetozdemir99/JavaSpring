package com.example.getPet.service;

import com.example.getPet.entity.Post;
import com.example.getPet.entity.User;
import com.example.getPet.repository.PostRepo;
import com.example.getPet.request.AdoptionPostCreateRequest;
import com.example.getPet.request.PostUpdateRequest;
import com.example.getPet.request.QuestionPostCreateRequest;
import com.example.getPet.request.TakeCarePostCreateRequest;
import com.example.getPet.response.PostResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;



@Getter
@Setter
@Service

public class PostService {
    private UserService userService;
    private PostRepo postRepo;

    @Autowired
    public PostService(UserService userService, PostRepo postRepo) {
        this.userService = userService;
        this.postRepo = postRepo;
    }

//  public List<PostResponse> getAllPostsAnUser(Long userId) { // it's for posts that belong a person which's userid is userId.
 //      List<Post> list = Collections.singletonList(postRepo.findByUser_Id(userId));
 //      return list.stream().map(PostResponse::new).collect(Collectors.toList());
 //  }



    public Post getPostById(Long id) {
        return postRepo.findById(id).orElse(null);
    }



    public Post createAdoptionPost(AdoptionPostCreateRequest postCreateRequest) { // creation for adoption posts.
        LocalDateTime now = LocalDateTime.now();
        User user = userService.getUserById(postCreateRequest.getUserId());
        if(user == null)
            return null;
        Post toSave = new Post();
        toSave.setLikeCount(Long.valueOf(0));
        toSave.setContent(postCreateRequest.getContent());
        toSave.setTitle(postCreateRequest.getTitle());
        toSave.setUser(user);
        toSave.setPostType("adoption");
        toSave.setCity(postCreateRequest.getCity());
        toSave.setAge(postCreateRequest.getAge());
        toSave.setKind(postCreateRequest.getKind());
        return postRepo.save(toSave);
    }



    public Post createQuestionPost(QuestionPostCreateRequest postCreateRequest) { // creation for question posts.
        LocalDateTime now = LocalDateTime.now();
        User user = userService.getUserById(postCreateRequest.getUserId());
        if(user == null)
            return null;
        Post toSave = new Post();
        toSave.setLikeCount(Long.valueOf(0));
        toSave.setId(postCreateRequest.getPostId());
        toSave.setContent(postCreateRequest.getContent());
        toSave.setTitle(postCreateRequest.getTitle());
        toSave.setUser(user);
        toSave.setPostType("question");
        return postRepo.save(toSave);
    }



    public Post createTakeCarePost(TakeCarePostCreateRequest postCreateRequest) { // creation for take care posts.
        LocalDateTime now = LocalDateTime.now();
        User user = userService.getUserById(postCreateRequest.getUserId());
        if(user == null)
            return null;
        Post toSave = new Post();
        toSave.setLikeCount(Long.valueOf(0));
        toSave.setContent(postCreateRequest.getContent());
        toSave.setTitle(postCreateRequest.getTitle());
        toSave.setUser(user);
        toSave.setPostType("take care");
        toSave.setCity(postCreateRequest.getCity());
        toSave.setAge(postCreateRequest.getAge());
        toSave.setKind(postCreateRequest.getKind());
        toSave.setStartDate(postCreateRequest.getStartDate());
        toSave.setEndDate(postCreateRequest.getEndDate());
        toSave.setTakeCarePrice(postCreateRequest.getPrice());
        return postRepo.save(toSave);
    }


    public Post updatePostById(Long postId, PostUpdateRequest updatedPost) {
        Optional<Post> post = postRepo.findById(postId);
        if(post.isPresent()){
            Post toUpdate = post.get();
            toUpdate.setContent(updatedPost.getText());
            toUpdate.setTitle(updatedPost.getTitle());
            return postRepo.save(toUpdate);
        }
        return null;
    }

    public void deletePost(Long id) {
        postRepo.deleteById(id);
    }

    public List<Post> getAdoptionPosts() {
        return postRepo.findByPostType("adoption");
    }

    public List<Post> getTakeCarePosts() {
        return postRepo.findByPostType("take care");
    }






}
