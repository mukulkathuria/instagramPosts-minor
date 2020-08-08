import React from "react";
import {
  validateForm,
  changeErrors,
  errorsForm,
} from "./Validations/validateform";
import { Form, MainDiv, Errors, Buttonscs } from "./uploadalbum.style";
import { UploadPhoto } from "../../../../services/uploadAlbum.services";

class AlbumUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      desc: "",
      isSubmitting: false,
      errors: {
        file: "",
        desc: "",
      },
    };
    this.PhotoInput = React.createRef();
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    let { errors } = this.state;
    changeErrors(errors, name, value, e.target);
    this.setState({ errors, [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    if (validateForm(this.state)) {
      const { desc } = this.state;
      const data = await UploadPhoto(desc, this.PhotoInput);
      if (data === "Saved") window.location.reload();
      this.setState({ isSubmitting: false });
    } else {
      const { errors } = this.state;
      errorsForm(this.state);
      this.setState({ errors, isSubmitting: false });
    }
  };

  render() {
    const { errors, file, desc, isSubmitting } = this.state;
    return (
      <MainDiv>
        Please Upload Your Photo
        <Form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="file"
              type="file"
              ref={this.PhotoInput}
              accept="image/jpeg , image/png"
              onChange={this.handleChange}
            />
            {errors.file.length > 0 && <Errors>{errors.file}</Errors>}
          </div>
          <div>
            <textarea
              type="text"
              name="desc"
              onChange={this.handleChange}
              value={this.state.desc}
              placeholder="Enter Caption.."
            />
          </div>
          {errors.desc.length > 0 && <Errors>{errors.desc}</Errors>}
          <Buttonscs>
            <button
              type="submit"
              disabled={
                file.length === 0 ||
                desc.length === 0 ||
                errors.file.length > 0 ||
                errors.desc.length > 0
              }
            >
              {isSubmitting ? "Posting.." : "Post"}
            </button>
          </Buttonscs>
        </Form>
      </MainDiv>
    );
  }
}
export default AlbumUpload;
