package com.example.getPet.controller;

import com.example.getPet.entity.Post;
import com.example.getPet.request.AdoptionPostCreateRequest;
import com.example.getPet.request.PostUpdateRequest;

import com.example.getPet.request.QuestionPostCreateRequest;
import com.example.getPet.request.TakeCarePostCreateRequest;
import com.example.getPet.response.PostResponse;
import com.example.getPet.service.PostService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Getter
@Setter
@RestController
@RequestMapping("/posts")
public class PostController {
    private PostService postService;


    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPosts(){
        return postService.getPostRepo().findAll();
    }





 //   @GetMapping("/{userId}") //  returns the list of posts by userId
 //   public List<PostResponse> getAllPostsAnUser(@PathVariable Long userId){
 //       return postService.getAllPostsAnUser(userId);
//
 //   }
//



        //   for creations  you can look at the creation requests for every posts in  the request package.
    @PostMapping("/createAdoption")
    public Post createAdoptionPost(@RequestBody AdoptionPostCreateRequest postCreateRequest) {
        return postService.createAdoptionPost(postCreateRequest);
    }



    @PostMapping("/createQuestion")
    public Post createQuestionPost(@RequestBody QuestionPostCreateRequest postCreateRequest) {
        return postService.createQuestionPost(postCreateRequest);
    }



    @PostMapping("/createTakeCare")
    public Post createTakeCarePost(@RequestBody TakeCarePostCreateRequest postCreateRequest) {
        return postService.createTakeCarePost(postCreateRequest);
    }






    @GetMapping("/{postId}")
    public Post getPostById(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }

    @PutMapping("/{postId}")
    public Post updatePostById(@PathVariable Long postId, @RequestBody PostUpdateRequest updatePost) {
        return postService.updatePostById(postId, updatePost);
    }


    @DeleteMapping("/{postId}")
    public void deletePostById(@PathVariable Long postId) {
        postService.deletePost(postId);
    }


    @PostMapping("/uploadPhoto")
    public String uploadPhoto(@RequestParam("postId") Long postId,
                              @RequestParam("photo") MultipartFile photo) throws Exception {
        return postService.uploadPhoto(postId,photo);
    }

}



