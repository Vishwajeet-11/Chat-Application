import { ChatEngine, ChatFeed } from 'react-chat-engine';


import './App.css';



const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "cb2861f7-ea25-4898-9169-25f0cd4a5bce"
            userName = "Vishwajeet"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps) =>  <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;