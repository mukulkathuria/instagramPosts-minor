import React, { Component } from "react";
import { connect } from "react-redux";
import { addComments } from "../../Redux/PostsReducer/posts.actions";
import { FaPaperPlane } from "react-icons/fa";
import { Inputs, SendBtn } from "./commentform.style";

class CommentForm extends Component {
  state = {
    comments: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ comments: "" });
    this.props.onAddComment(
      this.props.postid,
      this.state.comments,
      this.props.users.name
    );
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
        <SendBtn type="submit">
          <FaPaperPlane />
        </SendBtn>
      </form>
    );
  }
}
const maptoDispatch = (dispatch) => ({
  onAddComment: (postid, value, username) =>
    dispatch(addComments(postid, value, username)),
});

export default connect(null, maptoDispatch)(CommentForm);
