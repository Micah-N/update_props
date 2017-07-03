export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>
          <option value="Donatello">Donatello</option>
          <option value="Leonardo">Leonardo</option>
          <option value="Michelangelo">Michelangelo</option>
          <option value="Raphael">Raphael</option>
        </select>
      </div>
    );
  }
}