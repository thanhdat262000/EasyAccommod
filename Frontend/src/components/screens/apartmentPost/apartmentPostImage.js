import React, { Component } from "react";
import Upload from "../../../image/upload.svg";
import "../../../css/screens/apartmentPost/apartmentPostImage.css";

class ApartmentPostImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.disPlay = this.disPlay.bind(this);
  }
  disPlay(event) {
    console.log("Clicked");
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }
  render() {
    const { OnNext } = this.props;
    return (
      <div className="apartment-post-image">
        <div className="apartment-post-image-custom-button">
          <label for="apartment-post-image-button">
            {" "}
            <span>Chọn ảnh và tải lên</span>
            <img src={Upload} alt="upload" width={20} height={20} />
          </label>
          <input
            onChange={this.disPlay}
            type="file"
            accept="image/*"
            id="apartment-post-image-button"
          ></input>
        </div>
        <div className="apartment-post-image-description">
          <p>
            Nhấn vào nút “Chọn ảnh tải lên” để chọn và tải nhiều ảnh lên cùng
            lúc.
          </p>
          <p>Dung lượng tối đa 2MB cho từng ảnh.</p>
          <h4>ẢNH ĐÃ TẢI LÊN (1/5)</h4>
        </div>
        <div className="apartment-post-image-review">
          <img alt="review" id="output" width={200} />
        </div>
        <button className="apartment-post-continue" onClick={OnNext}>
          Tiếp theo
        </button>
      </div>
    );
  }
}

export default ApartmentPostImage;
