import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () =>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author='sam' time="4:55" comment="nice dude" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='marge' time="6:05" comment="meh...I seen better" avatar={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail 
                author='mary' 
                time="11:11" 
                comment="that's illegal"
                avatar={faker.image.avatar()}/>
           </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


