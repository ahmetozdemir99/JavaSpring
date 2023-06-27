package com.example.getPet.service;

import com.example.getPet.entity.Message;
import com.example.getPet.entity.User;
import com.example.getPet.repository.MessageRepository;
import com.example.getPet.request.MessageSendRequest;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Getter
@Setter
@Service
public class MessageService {
    private final MessageRepository messageRepository;
    private final UserService userService;
    @Autowired
    public MessageService(MessageRepository messageRepository,UserService userService){
        this.messageRepository=messageRepository;
        this.userService=userService;
    }

    public List<Message> getConversation(Long senderId, Long receiverId){
        User sender = userService.getUserById(senderId);
        User receiver = userService.getUserById(receiverId);
        List<Message> messages_sender_reciever= messageRepository.findBySenderAndReceiver(sender,receiver);
        List<Message> messages_reciever_sender= messageRepository.findBySenderAndReceiver(receiver,sender);
        messages_reciever_sender.addAll(messages_sender_reciever);
        return messages_reciever_sender;
    }


    public Message sendMessage(MessageSendRequest messageSendRequest) {
    //date burada eklenebilir
        User sender = userService.getUserById(messageSendRequest.getSenderId());
        User reciever = userService.getUserById(messageSendRequest.getRecieverId());
    //null ise error handling eklenebilir
        Message message = new Message();
        message.setSender(sender);
        message.setReceiver(reciever);
        message.setMessageText(messageSendRequest.getMessage());
        messageRepository.save(message);

        return message;
    }

}
