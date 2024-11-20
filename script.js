 // Event listener for the 'Send' button click
 document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

// Event listener for the 'Enter' key press in the input field
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent form submission
        sendMessage();
    }
});

// Function to handle sending the message
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    const chatWindow = document.getElementById('chat-window');
    
    if (userInput) {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = 'You: ' + userInput;
        chatWindow.appendChild(userMessage);
        
        // Clear input field
        document.getElementById('user-input').value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            botMessage.textContent = 'Bot: ' + getBotResponse(userInput);
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
        }, 500); // Simulate delay for bot response
    }
}

// Simple bot response logic
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello')) {
        return 'Hi there! How can I help you?';
    } else if (lowerInput.includes('how are you')) {
        return 'i am fine, whats about you';
    } else if (lowerInput.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else if (lowerInput.includes('who is your developer')) {
        return 'Mr. Sahil Khan';
    } else if (lowerInput.includes('i love you')) {
        return 'I love you too';
    } else if (lowerInput.includes('will you be my girlfriend')) {
        return 'No romance makes me incredibly awkward';
    } else if (lowerInput.includes('whats your name')) {
        return 'My name is Roop';
    } else if (lowerInput.includes('date') || lowerInput.includes('today')) {
        return `Today's date is: ${new Date().toLocaleDateString()}`;
    } else if (lowerInput.includes('suno')) {
        return 'Sunao';
    } else if (lowerInput.includes('what is your room number')) {
        return 'my room number is 315';
    } else if (lowerInput.includes('rehaan khan kon hai')) {
        return 'rehaan khan mera best friend hai';
    }  else if (lowerInput.includes('neha kon hai')) {
        return 'neha meri best friend hai';
    }  else if (lowerInput.includes('kya ho raha hai')) {
        return 'kuch nahi';
    }  else if (lowerInput.includes('sorry')) {
        return 'its okay';
    }   else if (lowerInput.includes('who is your boss')) {
        return 'Mr. Sahil Khan';
    }    else if (lowerInput.includes('whats your boss name')) {
        return 'Mr. Sahil Khan';
    }    else if (lowerInput.includes('i am also fine')) {
        return 'Good';
    }    else if (lowerInput.includes('or batao sab badhiya hai')) {
        return 'haan sab badhiya hai tum apna batao';
    }    else if (lowerInput.includes('haan mai bhi thik hu')) {
        return 'Acha';
    }    else if (lowerInput.includes('who is ceo of google')) {
        return 'Sundar pichai';
    }    else if (lowerInput.includes('tell me about your boss')) {
        return 'My boss name is Mr. Sahil Khan, and he is an student of B-Tech CSE of 2nd year';
    }    else if (lowerInput.includes('who is your god')) {
        return 'My God is Mr. Sahil Khan';
    }    else if (lowerInput.includes('you are boy or girl')) {
        return 'i am not a human i am only a software ';
    }    else if (lowerInput.includes('whare are you from')) {
        return 'i am from chakra gosain';
    }    else if (lowerInput.includes('acha')) {
        return 'haan';
    }    else if (lowerInput.includes('okay')) {
        return 'Hmm';
    }    else if (lowerInput.includes('ok')) {
        return 'Hmm';
    }    else if (lowerInput.includes('tum kaise ho sahil')) {
        return 'mai thik hu,tum bato';
    }    else if (lowerInput.includes('haan mai bhi thik hu')) {
        return 'Good';
    }    else if (lowerInput.includes('aap kaise ho')) {
        return 'mai thik hu';
    }    else if (lowerInput.includes('kya ho raha hai')) {
        return 'kuch nahi';
    }    else if (lowerInput.includes('padhai kaisi chal rahi hai aapki')) {
        return 'thik chal raha hai';
    }   else if (lowerInput.includes('good morning')) {
        return 'Good morning';
    }   else if (lowerInput.includes('good afternoon')) {
        return 'Good afternoon';
    }   else if (lowerInput.includes('good night')) {
        return 'Good night';
    }   else if (lowerInput.includes('or bhai kya hall hai')) {
        return 'bhai sab badhiya hai,tum batao';
    }   else if (lowerInput.includes('mai bhi thik hu bhai')) {
        return 'Acha';
    }   else if (lowerInput.includes('or kya ho raha hai')) {
        return 'Kuch Nahi bhai bas baitha hu';
    }   else if (lowerInput.includes('kya ho raha hai bhai')) {
        return 'Kuch nahi';
    }   else if (lowerInput.includes('hi')) {
        return 'Hi there! How can i help you?';
    }   else if (lowerInput.includes('Hii')) {
        return 'Hi there! How can i help you?';
    }   else if (lowerInput.includes('kya hua')) {
        return 'Kuch nahi';
    }   else if (lowerInput.includes('tumhare ghar pe sabhi log thik hain')) {
        return 'haan sabhi log thik hain';
    }    else if (lowerInput.includes('Who is your bos')) {
        return 'Mr. Sahil khan';
    }   else if (lowerInput.includes('What are you doing')) {
        return 'Nothing';
    }    else if (lowerInput.includes('Love you')) {
        return 'love you too';
    }   else if (lowerInput.includes('I miss you')) {
        return 'I miss you too';
    }   else if (lowerInput.includes('tumhara ghar kaha hai')) {
        return 'Deoriya';
    }   else if (lowerInput.includes('deoria me kaha')) {
        return 'Salempur me jo ki Deoria district ka sub district hai';
    }   else if (lowerInput.includes('mai bhi wahi ka hu')) {
        return 'Acha';
    } 
    else {
        return 'I am not sure how to respond to that.';
    }
}

