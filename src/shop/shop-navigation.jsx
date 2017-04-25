import React, {PropTypes} from 'react'

export default React.createClass({
    displayName: 'ShopNavigation',

    propTypes: {
        history: React.PropTypes.object.isRequired,
    },

    render(){
        return (
            <div className="shop-navigation">
                Shop Navigation
            </div>
        );
    },
});
