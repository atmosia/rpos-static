import React, {PropTypes} from 'react'
import ShopNavigation from './shop-navigation'
import ShopList from './shop-list'

export default React.createClass ({
    displayName: 'ShopBox',

    propTypes: {
        history: React.PropTypes.object.isRequired,
    },

    getInitialState() {
        return {};
    },

    render() {
        return (
            <div className="shop-box">
                <ShopNavigation history={this.props.history} />
                <ShopList />
            </div>
        );
    },
});
