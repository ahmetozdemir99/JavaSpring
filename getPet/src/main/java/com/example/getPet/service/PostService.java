package com.example.getPet.service;

import com.example.getPet.entity.Post;
import com.example.getPet.entity.User;
import com.example.getPet.repository.PostRepo;
import com.example.getPet.request.AdoptionPostCreateRequest;
import com.example.getPet.request.PostUpdateRequest;
import com.example.getPet.request.QuestionPostCreateRequest;
import com.example.getPet.request.TakeCarePostCreateRequest;
import lombok.Getter;
import lombok.Setter;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
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
        toSave.setCreationTime(now);
        toSave.setSpecialNeeds(postCreateRequest.getSpecialNeeds());
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
        toSave.setCreationTime(now);
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
        toSave.setCreationTime(now);
        toSave.setSpecialNeeds(postCreateRequest.getSpecialNeeds());
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


    private final String uploadDir = "C:\\Users\\Ahmet\\Desktop\\Pets";


    @Transactional
    public String uploadPhoto(Long postId, MultipartFile photo) throws Exception {
        Optional<Post> post = postRepo.findById(postId);
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdir();
        }

        if (!photo.isEmpty()) {
            try {
                // Validate file format
                String contentType = photo.getContentType();
                if (!contentType.equals("image/jpeg")) {
                    // Invalid file format
                    return "invalid-file-format";
                }

                // Generate the file name using postId
                String fileName = "post" + postId + ".jpg"; // Replace postId with the actual post ID

                // Resize the image
                BufferedImage originalImage = ImageIO.read(photo.getInputStream());
                BufferedImage resizedImage = Thumbnails.of(originalImage)
                        .size(800, 600)
                        .outputFormat("jpeg")
                        .asBufferedImage();
                // Create new FileEntity and associate it with the folder
                Path filePath = Paths.get(uploadDir, fileName);
                ImageIO.write(resizedImage, "jpeg", filePath.toFile());
                post.get().setPhotoPath(filePath.toString());
                return "upload-success";

            } catch (IOException e) {
                // Handle file processing errors
                return "upload-error";
            }
        } else {
            // Handle case when no file was uploaded
            return "no-file-uploaded";
        }
    }






}
