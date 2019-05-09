import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ContextMenuTrigger } from "react-contextmenu";
import { bindActionCreators } from "redux";
import * as appStrings from "_core/constants/appStrings";
import * as mapActions from "_core/actions/mapActions";
import { MapContainer2D, MapContainer3D } from "components/Map";
import MiscUtil from "_core/utils/MiscUtil";
import styles from "_core/components/Map/MapContainer.scss";

export class MapContainer extends Component {
    componentDidMount() {
        this.refs.container.addEventListener("mouseout", evt => {
            this.props.mapActions.invalidatePixelHover();
        });
    }

    render() {
        let containerClasses = MiscUtil.generateStringFromSet({
            [styles.mapContainer]: true,
            [this.props.className]: typeof this.props.className !== "undefined"
        });
        return (
            <div ref="container" className={containerClasses}>
                <ContextMenuTrigger id={appStrings.MAP_CONTEXT_MENU_ID} holdToDisplay={-1}>
                    <MapContainer2D />
                    <MapContainer3D />
                </ContextMenuTrigger>
            </div>
        );
    }
}

MapContainer.propTypes = {
    mapActions: PropTypes.object.isRequired,
    className: PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(MapContainer);
