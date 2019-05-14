import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appStrings from "_core/constants/appStrings";
import * as mapActions from "_core/actions/mapActions";
import { MapContainer2D, MapContainer3D } from "components/Map";
import MiscUtil from "_core/utils/MiscUtil";
import styles from "_core/components/Map/MapContainer.scss";
import commonStyles from "styles/common.scss";

export class MapContainer extends Component {
    componentDidMount() {
        this.refs.container.addEventListener("mouseout", evt => {
            this.props.mapActions.invalidatePixelHover();
        });
    }

    render() {
        let containerClasses = MiscUtil.generateStringFromSet({
            [styles.mapContainer]: true,
            [commonStyles.cursorCrosshair]: this.props.isDrawingEnabled,
            [this.props.className]: typeof this.props.className !== "undefined"
        });
        return (
            <div ref="container" className={containerClasses}>
                <MapContainer2D />
                <MapContainer3D />
            </div>
        );
    }
}

MapContainer.propTypes = {
    isDrawingEnabled: PropTypes.bool.isRequired,
    mapActions: PropTypes.object.isRequired,
    className: PropTypes.string
};

function mapStateToProps(state) {
    return {
        isDrawingEnabled: state.map.getIn(["drawing", "isDrawingEnabled"])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer);
