import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 5:00PM" 
                msg="Game Changer Blog!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="marco" 
                timeAgo="Yesterday at 5:00PM" 
                msg="Blew my mind"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Janet" 
                timeAgo="Tomorrow at 5:00PM (yeah from future :p)" 
                msg="Eternally Wise article! I would know since I'm from future ;)"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
