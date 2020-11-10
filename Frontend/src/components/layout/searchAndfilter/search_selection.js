import React, { Component } from "react";
import "../../../css/selection.css";
class SearchSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria, selections } = this.props.search;
    return (
      <div className="search-selection">
        <div className="criteria">
          <label for="room-type">{criteria}</label>
        </div>
        <div className="selection">
          <select name="selection" id="roomtype">
            {selections.map((selection) => (
              <option value={selection.name} key={selection.id}>
                {selection.name}
              </option>
            ))}
            {/* <option value="flat">Căn hộ đầy đủ</option>
            <option value="miniFlat">Căn hộ mini</option>
            <option value="room">Phòng trọ</option>
            <option value="residentalHouse">Nhà dân</option> */}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchSelection;
