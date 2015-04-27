define([
    'react'
], (
    React
) => {
    var Name = React.createClass({
        render: function() {
            return (
                <span>{this.props.name}</span>
            );
        }
    });

    return Name;
});
