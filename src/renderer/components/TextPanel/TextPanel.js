import { h, Component } from "preact";

class TextPanel extends Component {
  render(props) {
    const { latestText } = props;

    return (
      <div>
        {latestText}
      </div>
    );
  }
}

export default TextPanel;
