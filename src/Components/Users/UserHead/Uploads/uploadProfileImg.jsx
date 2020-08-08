import React from "react";
import { fileUpload } from "./uploadfileValid";
import { Form, Errors, Successbtn } from "./uploadfile.style";
import { uploadProfile } from "../../../../services/uploadAlbum.services";

const validateForm = ({ errors, pic }) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  pic.length === 0 && (valid = false);
  return valid;
};

class UploadProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      pic: "",
      isSubmitting: false,
      errors: {
        pic: "",
      },
    };
    this.photo = React.createRef();
  }
  handleChange = (e) => {
    const file = e.target.files[0];
    const { errors } = this.state;
    if (file) fileUpload(errors, file);
    this.setState({ errors, pic: file });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    if (validateForm(this.state)) {
      const data = await uploadProfile(this.photo);
      if (data === "saved") window.location.reload();
      this.setState({ isSubmitting: false });
    } else {
      this.setState({ errors: { pic: "Invalid" } });
      this.setState({ isSubmitting: false });
    }
  };
  render() {
    const {
      errors: { pic },
      isSubmitting,
      pic: propic,
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="file"
            name="pic"
            ref={this.photo}
            accept="image/jpeg , image/png"
            onChange={this.handleChange}
          />
        </div>
        {pic.length > 0 && <Errors>{pic}</Errors>}
        <Successbtn>
          <button
            type="submit"
            disabled={propic.length === 0 || pic.length > 0}
          >
            {isSubmitting ? "Uploading" : "Upload"}
          </button>
        </Successbtn>
      </Form>
    );
  }
}
export default UploadProfile;
