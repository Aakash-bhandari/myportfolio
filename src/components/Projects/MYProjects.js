import Description from "./Description";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


import chatter1 from "../../Screenshots/chatter1.png"
import chatter2 from "../../Screenshots/chatter2.png"
import chatter3 from "../../Screenshots/chatter3.png"
import chatter4 from "../../Screenshots/chatter4.png"
import chatter5 from "../../Screenshots/chatter5.png"

import blognex1 from "../../Screenshots/blognex1.png"
import blognex2 from "../../Screenshots/blognex2.png"
import blognex3 from "../../Screenshots/blognex3.png"
import blognex4 from "../../Screenshots/blognex4.png"
import blognex5 from "../../Screenshots/blognex5.png"

import music1 from "../../Screenshots/music1.png"
import music2 from "../../Screenshots/music2.png"
import music3 from "../../Screenshots/music3.png"


export const projects = [
    {
        imgPath: chatify,
        title: "ChatterNet",
        description: "A real-time chat application featuring user accounts, friend search, group chats, and media sharing. Includes one-to-one video calling and a guest mode for anonymous chatting.",
        detailDescription: "Developed a dynamic MERN stack-based chat application named 'ChatterNet' that leverages WebSockets for real-time communication between users. Implemented WebRTC for video calling functionality, enabling users to connect with each other seamlessly. Executed end-to-end development of the chat application, encompassing MongoDB for data storage, Express.js for server-side logic, React for the frontend, and Node.js for server deployment.",
        technologies: ['MongoDB for data storage',
            'Express.js for server-side logic',
            'React for the frontend',
            'Node.js for server deployment',
            'WebSocket for real-time communication',
            'WebRTC for video calling',
            'Bootstrap for styling'],
        screenShots:[chatter1,chatter2,chatter3,chatter4,chatter5],
        ghLink: "https://github.com/Aakash-bhandari/ChatterNet-Frontend",
        demoLink: "https://chatternet.onrender.com/"
    }
    ,
    {
        imgPath: bitsOfCode,
        title: "BlogNex",
        description: "Developed a full-stack blog application using the MERN stack, implementing user authentication through JWT for secure login and registration functionalities",
        detailDescription: "Our blog application leverages the MERN stack to deliver a robust platform for creating, managing, and interacting with blog content. Built on MongoDB for flexible data storage and Express.js for efficient server-side logic, the application ensures secure user authentication through JWT. Upon login, users access a personalized dashboard powered by React.js, where they can write and format blog posts using Draft.js. Each blog entry is stored in MongoDB, supporting functionalities like editing and deletion. A responsive UI design, crafted with Material UI, enhances usability across devices. Additionally, a commenting system fosters user engagement by allowing readers to interact with posts through comments and replies, enriching the overall user experience.",
        technologies: ['MongoDB for data storage',
            'Express.js for server-side logic',
            'React for the frontend',
            'Node.js for server deployment',
            'Material UI for UI Development',
            'Redux for State Management'
        ],
        screenShots:[blognex1,blognex2,blognex3,blognex4,blognex5],
        ghLink: "https://github.com/Aakash-bhandari/ChatterNet-Frontend",
        demoLink: "https://blognex.onrender.com/",
    },
    {
        imgPath: editor,
        title: "Music.io",
        description: "Developed a responsive music application using pure HTML, CSS, and JavaScript. The application includes functionalities for playing songs and managing playback.",
        detailDescription: "Developed a music web application using pure HTML, CSS, and JavaScript, focusing on a seamless user experience with a beautiful UI design. The application features an array of songs that users can play and interact with directly in the browser, without the need for a backend server. This project showcases my frontend development skills in creating dynamic and engaging web applications solely through client-side scripting",
        technologies: ['HTML & CSS for Creating UI',
            'JavaScript used in Backend',
        ],
        screenShots:[music1,music2,music3,music1],
        ghLink: "https://github.com/Aakash-bhandari/musicapp.github.io",
        demoLink: " https://aakash-bhandari.github.io/musicapp.github.io/",
    },
    {
        imgPath: leaf,
        title: "Plant AI",
        description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
        ghLink: "https://github.com/soumyajit4419/Plant_AI",
        demoLink: "https://plant49-ai.herokuapp.com/",
    },
    {
        imgPath: suicide,
        title: "Ai For Social Good",
        description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.",
        ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
    },
    {
        imgPath: emotion,
        title: "Face Recognition and Emotion Detection",
        description: "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
        ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
    },
];