define([
    'react',
    'app/component/Inputbox'
], (
    React,
    Inputbox
) => {

    let App = React.createClass({
        PropTypes: {
            title: React.PropTypes.string.isRequired
        },

        getInitialState() {
            return {
                text: ''
            };
        },

        componentDidMount() {
            let val = this.refs.input.state.value;
            this.setState({
                text: val
            });
        },

        _onUpdate(val) {
            this.setState({
                text: val
            });
        },

        render() {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <hr />
                    <pre>{this.state.text}</pre>
                    <Inputbox ref="input" onUpdate={this._onUpdate} />
                </div>
            );
        }
    });

    return App;
});
