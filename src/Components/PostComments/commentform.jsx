import React, { Component } from "react";
import { connect } from "react-redux";
import { addCommentsAsync } from "../../Redux/PostsReducer/AsyncActions";
import { FaPaperPlane } from "react-icons/fa";
import { Inputs, SendBtn } from "./commentform.style";

class CommentForm extends Component {
  state = {
    comments: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ comments: "" });
    const { postid, users, onAddComment } = this.props;
    onAddComment(postid, this.state.comments, users.username);
  };
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ comments: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Inputs
          type="text"
          name="comments"
          onChange={this.handleChange}
          value={this.state.comments}
          placeholder="Add a comment...."
          autoComplete="off"
        />
        <SendBtn type="submit" disabled={this.state.comments.length === 0}>
          <FaPaperPlane />
        </SendBtn>
      </form>
    );
  }
}
const maptoDispatch = (dispatch) => ({
  onAddComment: (postid, value, username) =>
    dispatch(addCommentsAsync(postid, value, username)),
});

export default connect(null, maptoDispatch)(CommentForm);
